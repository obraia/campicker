import React, { memo, useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-native";
import { Alert } from 'react-native';
import Clipboard from 'expo-clipboard';
import { Snackbar } from 'react-native-paper';
import Canvas, { Image } from 'react-native-canvas';
import { getContrast } from "polished";
import diff from 'color-diff';

import { IColor, IPalette, IReducers, IRGB } from '../../interfaces';

import { Creators as navigationActions } from '../../store/ducks/navigation';
import { Creators as paletteActions } from '../../store/ducks/palette';

import { rgbToHex, hexToRgb } from '../../utils/colors';

import Camera from '../../components/camera';
import ConfirmButton from '../../components/confirmButton';
import CopyButton from '../../components/copyButton';

import {
  Container,
  ContainerRow,
  ColorPreview,
  ColorHexText,
  ColorResultContainer,
  ColorResultPreview,
  ColorResultInfoContainer,
  ColorResultName,
  ColorResultDescription,
  ColorResultHex
} from './styles';

const Search = () => {
  // console.log('[Page render] Search product');

  const pageName = 'Buscar cor';

  const history = useHistory();

  const { theme } = useSelector((state: IReducers) => state.themeReducers);
  const { palettes, selectedPalette } = useSelector((state: IReducers) => state.paletteReducers);
  const dispatch = useDispatch();

  const [isCameraActivated, setIsCameraActivated] = useState(true);
  const [colorToSearch, setColorToSearch] = useState('#FFFFFF');
  const [averegeColor, setAveregeColor] = useState<IColor>();
  const [snackbar, setSnackbar] = useState({ visible: false, text: '' });

  const cameraRef = useRef<any>(null);
  const canvasRef = useRef<Canvas>(null);

  const toggleCamera = () => { setIsCameraActivated(!isCameraActivated); }

  const searchColor = () => {
    const color: IRGB = hexToRgb(colorToSearch);
    const allColors: IRGB[] = [];

    palettes.forEach(p => p.colors.forEach(c => allColors.push(c.rgb)));

    const averegeColorRGB = diff.closest(color, allColors);
    const [resultColor] = palettes.map(p => p.colors.find(c => c.rgb === averegeColorRGB)).filter(c => c);

    if (resultColor) setAveregeColor(resultColor);
  }

  const goToPalette = (palleteId: string) => {
    console.log(palleteId)
    dispatch(paletteActions.selectPalette(palleteId));
    history.push('palette');
  }

  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.1, base64: true, skipProcessing: false };
      let data = await cameraRef.current.takePictureAsync(options);

      const source = data.base64;

      if (source && canvasRef.current) {
        const context = canvasRef.current.getContext('2d');

        if (context) {
          const image = new Image(canvasRef.current, 1, 1);
          image.src = `data:image/jpg;base64,${source}`;
          image.crossOrigin = "Anonymous";

          image.addEventListener('load', () => {
            context.drawImage(image, 0, 0, 1, 1);

            context.getImageData(0, 0, 1, 1).then(img => {
              const color = rgbToHex({ R: img.data[0], G: img.data[1], B: img.data[2] });
              setColorToSearch(color.toUpperCase())
            }).catch(err => console.log(err));
          });
        }
      }
    }
  };

  const getColorTextPreview = () => ((getContrast(colorToSearch, '#ffffff') < 5.0) ? '#000000' : '#ffffff');

  const copyToClipboard = (text: string = '') => {
    Clipboard.setString(text);
    setSnackbar({ visible: true, text: 'Copied to Clipboard' });
  }

  useEffect(() => {
    dispatch(navigationActions.goTo(pageName));
  }, [])

  return (
    <Container>
      {averegeColor &&
        <ColorResultContainer onPress={() => goToPalette(averegeColor.paletteId)}>
          <ColorResultPreview style={{ backgroundColor: averegeColor.hex }} />
          <ColorResultInfoContainer>
            <ContainerRow>
              <ColorResultName children={averegeColor.name} />
              <CopyButton onPress={() => copyToClipboard(averegeColor.hex)} />
            </ContainerRow>
            <ColorResultDescription children={averegeColor.description} />
            <ColorResultHex children={averegeColor.hex} />
          </ColorResultInfoContainer>
        </ColorResultContainer>}

      <ColorPreview style={{ backgroundColor: colorToSearch }} onLongPress={() => copyToClipboard(colorToSearch)}>
        <ColorHexText children={colorToSearch} style={{ color: getColorTextPreview() }} />
      </ColorPreview>

      {isCameraActivated && <Camera cameraRef={cameraRef} takePicture={takePicture} />}

      {(colorToSearch !== '#ffffff') &&
        <ConfirmButton onPress={searchColor} disabled={false} text={'Buscar cor'} mt={10} />}

      <Snackbar
        visible={snackbar.visible}
        duration={1000}
        onDismiss={() => setSnackbar({ visible: false, text: '' })}
        children={snackbar.text} />

      <Canvas ref={canvasRef} style={{ display: 'none' }} />
    </Container>
  );
}

export default memo(Search);