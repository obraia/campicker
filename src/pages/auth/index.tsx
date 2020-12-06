import React, { memo, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-native";

import { Checkbox } from 'react-native-paper';

import { IReducers, IUser } from '../../interfaces';
import { Creators as authActions } from '../../store/ducks/auth';
import { Creators as navigationActions } from '../../store/ducks/navigation';

import { Container, Title, InputGroup, Input, TextError, Text } from './styles';

import EyeButton from '../../components/eyeButton';
import ConfirmButton from '../../components/confirmButton';

const Auth = () => {
  // console.log('[Page render] Auth');

  const { theme } = useSelector((state: IReducers) => state.themeReducers);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [validForm, setValidForm] = useState({ username: true, password: true });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {

    const data: IUser = {
      username,
      password,
      rememberMe
    };

    console.log(data);

    dispatch(navigationActions.goTo('Paletas'));
    dispatch(authActions.authenticate())
    history.push('/home')
  }

  return (
    <Container>
      <Title>Login</Title>
      
      <Input placeholder={'Usuário'}
        autoCompleteType={'username'}
        onChangeText={value => setUsername(value)} />
        
      {!validForm.username && <TextError>Incorrect user!</TextError>}

      <InputGroup>
        <Input placeholder={'Senha'}
          autoCompleteType={'password'}
          secureTextEntry={hiddenPassword}
          onChangeText={value => setPassword(value)} />

        <EyeButton disabled={hiddenPassword} onPress={() => setHiddenPassword(!hiddenPassword)} />
      </InputGroup>
      
      {!validForm.password && <TextError>Incorrect password!</TextError>}

      <InputGroup>
        <Checkbox status={rememberMe ? 'checked' : 'unchecked'}
          onPress={() => setRememberMe(!rememberMe)}
          color={theme.colors.primary}
          uncheckedColor={theme.colors.textBackground} />
        <Text onPress={() => setRememberMe(!rememberMe)}>Manter conectado</Text>
      </InputGroup>

      <ConfirmButton onPress={handleLogin} disabled={!(username.length >= 3 && password.length >= 4)} text={'Fazer login'} />
    </Container>
  );
}

export default memo(Auth);