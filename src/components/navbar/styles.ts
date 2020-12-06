import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.View`
  height: 7%;
  min-height: 50px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
`;

export const ButtonContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 7.5px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.background};
`;
