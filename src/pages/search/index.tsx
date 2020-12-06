import React, { memo, useState, useRef } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-native";
import Canvas, { Image } from 'react-native-canvas';
import { getContrast } from "polished";

import { IReducers } from '../../interfaces';
import { Creators as navigationActions } from '../../store/ducks/navigation';

import rgbToHex from '../../utils/rgbToHex';

import Camera from '../../components/camera';
import ConfirmButton from '../../components/confirmButton';

import { Container, ColorPreview, ColorHexText } from './styles';

const Search = () => {
  // console.log('[Page render] Search product');

  const history = useHistory();

  const { theme } = useSelector((state: IReducers) => state.themeReducers);
  const { palettes } = useSelector((state: IReducers) => state.paletteReducers);
  const dispatch = useDispatch();

  const [isCameraActivated, setIsCameraActivated] = useState(true);
  const [averegeColor, setAveregeColor] = useState('#fff');
  const cameraRef = useRef<any>(null);
  const canvasRef = useRef<Canvas>(null);

  const toggleCamera = () => { setIsCameraActivated(!isCameraActivated); }

  const searchColor = () => {

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
              setAveregeColor(color)
            }).catch(err => console.log(err));
          });
        }
      }
    }
  };

  const getColorTextPreview = () => {
    if (getContrast(averegeColor, '#ffffff') < 5.0) return '#000000';
    else return '#ffffff';
  }

  return (
    <Container>
      {isCameraActivated && <Camera cameraRef={cameraRef} />}
      <ColorPreview style={{ backgroundColor: averegeColor }}>
        <ColorHexText children={averegeColor} style={{color: getColorTextPreview()}}/>
      </ColorPreview>
      <ConfirmButton onPress={takePicture} disabled={false} text={'Buscar'} />
      <Canvas ref={canvasRef} style={{ display: 'none' }} />
    </Container>
  );
}

export default memo(Search);