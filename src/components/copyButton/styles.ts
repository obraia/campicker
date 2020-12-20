import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.background};
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 18px;
  color: ${props => props.theme.colors.textPrimary};
`;