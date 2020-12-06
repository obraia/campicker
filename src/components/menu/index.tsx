import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-native";
import { Linking } from 'react-native'
import { Switch } from 'react-native-paper';

import { IReducers } from '../../interfaces';
import { Creators as authActions } from '../../store/ducks/auth';
import { Creators as navigationActions } from '../../store/ducks/navigation';
import { Creators as menuActions } from '../../store/ducks/menu';
import { Creators as themeActions } from '../../store/ducks/theme';
import GithubIcon from '../../components/svg/github';

import {
  Container,
  Modal,
  Header,
  Title,
  CloseButton,
  Body,
  Item,
  ItemTitle,
  Footer,
  FooterText,
  OutsideArea
} from './styles';

const Menu = () => {
  // console.log('[Menu] render');

  const { theme } = useSelector((state: IReducers) => state.themeReducers);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleLogoff = () => {
    toggleMenu();
    dispatch(navigationActions.goTo('Autenticação'));
    dispatch(authActions.logoff());
    history.push('/')
  }

  const toggleMenu = () => {
    dispatch(menuActions.toggleMenu());
  }

  return (
    <>
      <OutsideArea onTouchStart={toggleMenu} />
      <Container>
        <Modal>
          <Header>
            <Title>Configurações</Title>
            <CloseButton onPress={toggleMenu} />
          </Header>
          <Body>
            <Item>
              <ItemTitle>Modo escuro</ItemTitle>
              <Switch value={theme.title === 'dark'}
                onValueChange={() => dispatch(themeActions.toggleTheme())}
                color={theme.colors.primary} />
            </Item>
          </Body>
          <Footer onPress={handleLogoff}>
            <FooterText>Fazer logoff</FooterText>
            <FooterText>Versão 0.0.1</FooterText>
            {/* <GithubIcon fill={theme.colors.primary} /> */}
          </Footer>
        </Modal>
      </Container>
    </>
  );
}

export default Menu;