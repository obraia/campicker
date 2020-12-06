import styled from 'styled-components/native';
import { lighten, transparentize } from 'polished';

export const Container = styled.ScrollView`
  height: 100%;
  padding: 10px;
  background-color: ${ props => props.theme.colors.background };
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${ props => lighten(0.05, props.theme.colors.background) };
`;

export const SearchInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: transparentize(0.5, props.theme.colors.textBackground)
}))`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  background-color: ${ props => lighten(0.1, props.theme.colors.background) };
  color: ${ props => props.theme.colors.primary };
`;

export const ContainerButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 5px;
  background-color: ${ props => lighten(0.1, props.theme.colors.background) };
`;

export const PaginationDetails = styled.Text`
  margin-right: auto;
  color: ${ props => props.theme.colors.textBackground };
`;

export const WhiteSpace = styled.View`
  height: 10px;
`;