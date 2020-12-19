import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${props => props.theme.colors.background};
`;

export const ColorPreview = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 30px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const ColorHexText = styled.Text`
  font-size: 28px;
`;

export const ColorResultContainer = styled.TouchableOpacity`
  flex: 2;
  flex-direction: row;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
`;

export const ColorResultPreview = styled.View`
  width: 80px;
  height: 100%;
  margin-right: 10px;
  border-radius: 10px;
`;

export const ColorResultInfoContainer = styled.View`
  flex: 1;
`;

export const ColorResultName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color:${props => props.theme.colors.textBackground};
`;

export const ColorResultDescription = styled.Text`
  font-size: 12px;
  color:${props => props.theme.colors.textBackground};
`;

export const ColorResultHex = styled.Text`
  margin-top: auto;
  margin-left: auto;
  font-size: 14px;
  color:${props => props.theme.colors.textBackground};
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
