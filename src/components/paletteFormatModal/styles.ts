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

export const CodeContainer = styled.View`
  padding: 10px;
  justify-content:center;
  align-items: center;
  border-radius: 10px;
  background-color: ${props => lighten(0.05, props.theme.colors.background)};

`;

export const CodeBlock = styled.View`
  padding-left: 10px;
`;

export const CodeLine = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const CodeText = styled.Text`
  font-size: 14px;
`;

export const CodeKey = styled(CodeText)`
  color: ${props => props.theme.colors.color1};
`;

export const CodeValueString = styled(CodeText)`
  color: ${props => props.theme.colors.color2};
`;

export const CodeValue = styled(CodeText)`
  color: ${props => props.theme.colors.color3};
`;

export const CodeElement = styled(CodeText)`
  margin-right: 5px;
  color: ${props => props.theme.colors.color4};
`;

export const Footer = styled.View`
  width: 100%;
  height: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
`;

export const OutsideArea = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  right: 0;
`;