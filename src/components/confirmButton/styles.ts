import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  /* margin-top: auto; */
  padding: 10px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.primary};
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 18px;
  color: ${props => props.theme.colors.textPrimary};
`;