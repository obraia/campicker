import React from 'react';
import { useSelector } from 'react-redux';
import { transparentize } from 'polished';

import { IReducers } from '../../interfaces';

import { Container, Text } from './styles';

const ConfirmButton = (props: {
  text: string,
  disabled: boolean,
  onPress: () => void,
  mt?: number,
  mb?: number,
}) => {

  const { theme } = useSelector((state: IReducers) => state.themeReducers);

  return (
    <Container onPress={props.onPress} disabled={props.disabled}
      style={{
        backgroundColor: props.disabled ? transparentize(0.5, theme.colors.primary) : theme.colors.primary,
        marginTop: props.mt, marginBottom: props.mb
      }}>
      <Text>{props.text}</Text>
    </Container>
  );
}

export default ConfirmButton;