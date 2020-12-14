import React, { memo, useState, useRef } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-native";
import Canvas, { Image } from 'react-native-canvas';
import { getContrast, parseToRgb } from "polished";
import diff from 'color-diff';

import { IColor, IReducers, IRGB } from '../../interfaces';
import { Creators as navigationActions } from '../../store/ducks/navigation';

import rgbToHex from '../../utils/rgbToHex';
import hexToRgb from '../../utils/hexToRgb';
import getDifference from '../../utils/getDifference';

import Camera from '../../components/camera';
import ConfirmButton from '../../components/confirmButton';

import {
  Container,
  ColorPreview,
  ColorHexText,
  ColorResultContainer,
  ColorResultPreview,
  ColorResultInfoContainer,
  ColorResultName,
  ColorResultHex
} from './styles';

const Search = () => {
  // console.log('[Page render] Search product');

  const history = useHistory();

  const { theme } = useSelector((state: IReducers) => state.themeReducers);
  const { palettes } = useSelector((state: IReducers) => state.paletteReducers);
  const dispatch = useDispatch();

  const [isCameraActivated, setIsCameraActivated] = useState(true);
  const [colorToSearch, setColorToSearch] = useState('#ffffff');
  const [averegeColor, setAveregeColor] = useState<IColor>();
  const cameraRef = useRef<any>(null);
  const canvasRef = useRef<Canvas>(null);

  const toggleCamera = () => { setIsCameraActivated(!isCameraActivated); }

  const searchColor = () => {
    const color: IRGB = hexToRgb(colorToSearch);
    const allColors: IRGB[] = [];

    palettes.forEach(p => p.colors.forEach(c => {
      allColors.push(c.rgb);
    }));

    const averegeColorRGB = diff.closest(color, allColors);
    const [resultColor] = palettes.map(p => p.colors.find(c => c.rgb === averegeColorRGB)).filter(c => c);

    if (resultColor) setAveregeColor(resultColor);
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
              const color = rgbToHex(img.data[0], img.data[1], img.data[2]);
              setColorToSearch(color)
            }).catch(err => console.log(err));
          });
        }
      }
    }
  };

  const getColorTextPreview = () => {
    if (getContrast(colorToSearch, '#ffffff') < 5.0) return '#000000';
    else return '#ffffff';
  }

  return (
    <Container>
      {isCameraActivated && <Camera cameraRef={cameraRef} takePicture={takePicture} />}
      <ColorPreview style={{ backgroundColor: colorToSearch }}>
        <ColorHexText children={colorToSearch} style={{ color: getColorTextPreview() }} />
      </ColorPreview>
      <ConfirmButton onPress={searchColor} disabled={false} text={'Buscar cor'} />
      {averegeColor &&
        <ColorResultContainer >
          <ColorResultPreview style={{ backgroundColor: averegeColor.hex }} />
        <ColorResultInfoContainer>
          <ColorResultName children={averegeColor.name}/>
          <ColorResultHex children={averegeColor.hex}/>
        </ColorResultInfoContainer>
        </ColorResultContainer>
      }
      <Canvas ref={canvasRef} style={{ display: 'none' }} />
    </Container>
  );
}

export default memo(Search);