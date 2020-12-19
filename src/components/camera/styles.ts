import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { lighten } from 'polished';
import { BarCodeScanner as Scanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';

const { width, height } = Dimensions.get('window');

export const Container = styled.TouchableOpacity`
 
  justify-content: center;
  align-items: center;
  background-color: ${props => lighten(0.05, props.theme.colors.background)};
  border-radius: 10px;
  overflow: hidden;
`;

export const BarCodeScanner = styled(Scanner)`
  width: 100%;
  height: 250%;
`;

export const ExpoCamera = styled(Camera)`
  width: ${width}px;
  height: ${width}px;
`;

export const ButtonShot = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 20px;
  justify-content: center;
  align-items:center;
  border-radius: 40px;
  background-color: #efefef;
`;

export const InnerButtonShot = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${props => lighten(0.05, props.theme.colors.primary)};
`;
