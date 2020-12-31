import React from 'react';
import { useSelector } from 'react-redux';
import { transparentize } from 'polished';

import { IReducers } from '../../interfaces';

import QuestionIcon from '../svg/question-circle';

import { Container } from './styles';

const Question = (props: {
  disabled?: boolean,
  onPress: () => void,
  mt?: number,
  mb?: number,
  ml?: number,
  mr?: number
}) => {

  const { theme } = useSelector((state: IReducers) => state.themeReducers);

  return (
    <Container
      onPress={props.onPress}
      disabled={props.disabled}
      style={{ marginTop: props.mt, marginBottom: props.mb, marginLeft: props.ml, marginRight: props.mr }}>
      <QuestionIcon fill={theme.colors.primary} size={'25px'} />
    </Container>
  );
}

export default Question;