import React from 'react';
import { useSelector } from 'react-redux';
import { lighten, transparentize } from 'polished';

import { IReducers } from '../../interfaces';

import { Container } from './styles';

import Eye from '../svg/eye';
import EyeClosed from '../svg/eye-closed';

const EyeButton = (props: { disabled: boolean, onPress: () => void }) => {

  const { theme } = useSelector((state: IReducers) => state.themeReducers);

  return (
    <Container onPress={props.onPress}>
      {props.disabled ? <EyeClosed fill={transparentize(0.5, theme.colors.primary)} /> : <Eye fill={theme.colors.primary} />}
    </Container>
  );
}

export default EyeButton;