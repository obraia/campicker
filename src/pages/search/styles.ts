import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${props => props.theme.colors.background};
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: auto;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 18px;
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
  color: ${props => props.theme.colors.textBackground};
`;

export const ColorPreview = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  max-height: 80px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const ColorHexText = styled.Text`
  font-size: 32px;
`;

export const ScanButton = styled.TouchableOpacity`
  width: 80px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 10px;
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
`;
