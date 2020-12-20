import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  padding: 20px;
`;

export const Modal = styled.View`
  width: 100%;
  /* border: 1px solid ${props => props.theme.colors.textBackground}; */
  border-radius: 15px;
  background-color: ${props => props.theme.colors.background};
  overflow: hidden;
`;

export const Header = styled.View`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.colors.textBackground};
`;

export const CloseButton = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  border: 1px solid ${props => props.theme.colors.textBackground};
  border-radius: 100px;
`;

export const Body = styled.View`
  padding: 10px;
`;

export const Item = styled.View`
  width: 100%;
  min-height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemTitle = styled.Text`
  color: ${props => props.theme.colors.textBackground};
`;

export const Footer = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
`;

export const RgbInput = styled.TextInput`
  width: 50px;
  height: 30px;
  padding: 0 10px;
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
  color: ${props => props.theme.colors.textBackground};
`;

export const ColorPreview = styled.View`
  flex: 3;
  height: 30px;
  margin-right: 10px;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 10px;
  background-color: ${props => props.theme.colors.background};
`;

export const FooterButton = styled.TouchableOpacity`
  flex: 1;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textPrimary};
`;

export const FooterButtonText = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.textPrimary};
`;

export const OutsideArea = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  right: 0;
`;