import React from 'react';
import { Input } from './styles';

const SimpleInput = (props: {
  placeholder: string,
  password?: boolean,
  value: string,
  editable?: boolean,
  mt?: number,
  mb?: number,
  onChangeText?: (value: string) => void
}) => {

  return (
    <Input
      placeholder={props.placeholder}
      secureTextEntry={props.password}
      value={props.value}
      onChangeText={props.onChangeText}
      editable={props.editable}
      style={{marginTop: props.mt, marginBottom: props.mb}}/>
  );
}

export default SimpleInput;