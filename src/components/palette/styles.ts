import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.TouchableOpacity`
  height: 100px;
  flex-direction: row;
  margin-bottom: 10px;
  padding: 10px;
  background-color: ${props => lighten(0.05, props.theme.colors.background)};
  border-radius: 10px;
`;

export const Image = styled.View`
  width: 120px;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 10px;
`;

export const PaletteHeader = styled.View`
  justify-content: space-between;
`;

export const PaletteBody = styled.View`
  flex: 1;
`;

export const PaletteName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.colors.textBackground};
`;

export const PaletteDescription = styled.Text`
  max-height: 38px;
  font-size: 10px;
  color: ${props => lighten(0.1, props.theme.colors.textBackground)};
`;

export const ColorsQuantity = styled.Text`
  width: 28px;
  height: 28px;
  text-align: center;
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: 16px;
  line-height: 28px;
  font-weight: bold;
  color: ${props => props.theme.colors.textPrimary};
  background-color: ${props => props.theme.colors.primary};
  border: 3px solid ${props => lighten(0.05, props.theme.colors.background)};
  border-radius: 15px;
`;

export const ModifiedDate = styled.Text`
  margin-top: auto;
  margin-left: auto;
  font-size: 12px;
  color: ${props => lighten(0.1, props.theme.colors.textBackground)};
`; 