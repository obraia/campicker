import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { lighten } from 'polished';

const { width, height } = (Dimensions.get('window'));

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${props => props.theme.colors.background};
`;

export const ImportButton = styled.TouchableOpacity`
  width: ${width - 160}px;
  height: ${width - 160}px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: ${(width - 100) / 2}px;
  margin: 20px 0;
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
`;

export const InputGroup = styled.View`
  flex-direction: row;
`;

export const PreviewContainer = styled.ScrollView`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
`;

export const PreviewContainerWhiteSpace = styled.View`
  height: 10px;
`;

export const PreviewLine = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  border-radius: 10px;
  background-color: ${props => lighten(0.05, props.theme.colors.background)};
`;

export const PreviewLineText = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.colors.textBackground};
`;
