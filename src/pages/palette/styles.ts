import styled from 'styled-components/native';
import { darken, lighten, transparentize } from 'polished';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${props => props.theme.colors.background};
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  flex: 1;
  border-radius: 10px;
  margin: 0 10px;
  padding: 10px;
  font-size: 36px;
  text-align: center;
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
  color: ${props => props.theme.colors.textBackground};
`;

export const Textarea = styled.TextInput.attrs(props => ({
  placeholderTextColor: transparentize(0.5, props.theme.colors.textBackground)
}))`
  flex: 1;
  justify-content: flex-start;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 18px;
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
  color: ${props => props.theme.colors.textBackground};
`;

export const ListHeader = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${props => lighten(0.05, props.theme.colors.primary)};
`;

export const ListHeaderButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  border-radius: 8px;
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
`;

export const ListContainer = styled.ScrollView`
  flex: 2;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
`; 

export const ItemButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 10px;
  border-radius: 10px;
  background-color: ${props => lighten(0.05, props.theme.colors.background)};
`;

export const ItemColorPreview = styled.View`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border: 1px solid ${props => lighten(0.1, props.theme.colors.textBackground)};
  border-radius: 2px;
`;

export const ItemText = styled.Text`
  color: ${props => props.theme.colors.textBackground};
`;

export const CountWhiteSpace = styled.View`
  height: 10px;
`;

export const ControlQuantityButton = styled.TouchableOpacity`
  width: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
`;