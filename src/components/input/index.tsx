import React from 'react';
import { Input } from './styles';

const SimpleInput = (props: {
  placeholder: string,
  password?: boolean,
  value: string,
  onChangeText: (value: string) => void
}) => {

  return (
    <Input
      placeholder={props.placeholder}
      secureTextEntry={props.password}
      value={props.value}
      onChangeText={props.onChangeText} />
  );
}

export default SimpleInput;