import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
`;