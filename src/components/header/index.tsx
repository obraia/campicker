import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as menuActions } from '../../store/ducks/menu';
import { IReducers } from '../../interfaces';

import { Container, Title, Button } from './styles';
import MenuIcon from '../svg/menu';

const Header = () => {
  // console.log('[Header] render');

  const { theme } = useSelector((state: IReducers) => state.themeReducers);
  const { page } = useSelector((state: IReducers) => state.navigationReducers);
  const dispatch = useDispatch();

  return (
    <Container>
      <Title>{page}</Title>
      <Button onPress={() => dispatch(menuActions.toggleMenu())}>
        <MenuIcon fill={theme.colors.primary} />
      </Button>
    </Container>
  );
}

export default Header;