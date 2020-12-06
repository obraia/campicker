import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  background-color: ${props => lighten(0.05, props.theme.colors.background)};
  border-radius: 8px;
  overflow: hidden;
`;

export const Color = styled.View`
  flex: 1;
`;
