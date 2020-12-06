import styled, { DefaultTheme } from 'styled-components/native';
import { Dimensions } from 'react-native';
import { lighten, transparentize } from 'polished';
import { Checkbox } from 'react-native-paper';
import { Props } from 'react-native-paper/lib/typescript/src/components/RadioButton/RadioButtonItem';

const { width, height } = (Dimensions.get('window'));

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${ props => props.theme.colors.background };
`;

export const Title = styled.Text`
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: bold;
  /* text-transform: uppercase; */
  color: ${ props => props.theme.colors.primary };
`;

export const InputGroup = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 10px;
`;

export const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: transparentize(0.5, props.theme.colors.textBackground)
}))`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  /* border: 1px solid ${ props => props.theme.colors.primary }; */
  background-color: ${ props => lighten(0.1, props.theme.colors.background) };
  color: ${ props => props.theme.colors.primary };
`;

export const TextError = styled.Text`
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: ${ props => props.theme.colors.danger };
`;

export const Text = styled.Text`
  margin-left: 5px;
  color: ${ props => props.theme.colors.textBackground };
`;
