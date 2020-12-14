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

export const FileTypeButton = styled.TouchableOpacity`
  width: ${width - 160}px;
  height: ${width - 160}px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: ${(width - 100) / 2}px;
  margin: 20px 0;
  /* border: 5px solid ${props => props.theme.colors.primary}; */
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
`;

export const FileType = styled.Text`
  font-size: 36px;
  color: ${props => props.theme.colors.primary};
`;

export const FileName = styled.TextInput`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  /* border: 1px solid ${props => props.theme.colors.primary}; */
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
  color: ${props => props.theme.colors.primary};
`;

export const ExportType = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
`;

export const ExportTypeText = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.textBackground};
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

export const PreviewLine = styled.View`
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
