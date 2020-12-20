import React from 'react';
import { useSelector } from 'react-redux';
import { transparentize } from 'polished';

import { IReducers } from '../../interfaces';

import CopyIcon from '../svg/copy';

import { Container, Text } from './styles';

const CopyButton = (props: {
  onPress: () => void,
  mt?: number,
  mb?: number,
}) => {

  const { theme } = useSelector((state: IReducers) => state.themeReducers);

  return (
    <Container onPress={props.onPress}
      style={{ marginTop: props.mt, marginBottom: props.mb }}>
      <CopyIcon fill={theme.colors.primary} />
    </Container>
  );
}

export default CopyButton;