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
  height: 40%;
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

export const Body = styled.ScrollView`
  flex: 1;
`;

export const Item = styled.View`
  width: 100%;
  min-height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const ItemTitle = styled.Text`
  color: ${props => props.theme.colors.textBackground};
`;

export const Footer = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
`;

export const FooterText = styled.Text`
  font-weight: bold;
  color: ${props => props.theme.colors.textBackground};
`;

export const OutsideArea = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  right: 0;
`;