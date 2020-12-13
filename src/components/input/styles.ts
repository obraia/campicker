import styled from 'styled-components/native';
import { lighten, transparentize } from 'polished';

export const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: transparentize(0.5, props.theme.colors.textBackground)
}))`
  width: 100%;
  height: 50px;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
  color: ${props => props.theme.colors.textBackground};
`;