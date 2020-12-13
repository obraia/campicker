import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  useHistory } from "react-router-native";

import { IReducers } from '../../interfaces';
import { Creators as navigationActions } from '../../store/ducks/navigation';
import { Creators as paletteActions } from '../../store/ducks/palette';

import ListIcon from '../svg/list';
import SwatchbookIcon from '../svg/swatchbook';
import AddIcon from '../svg/add';
import ImportIcon from '../svg/import';
import ExportIcon from '../svg/export';
import SearchIcon from '../svg/search';
import CampickerIcon from '../svg/campicker';

import { Container, ButtonContainer, Button } from './styles';

const Navbar = () => {
  // console.log('[Navbar] render');

  const { theme } = useSelector((state: IReducers) => state.themeReducers);
  const { page } = useSelector((state: IReducers) => state.navigationReducers);
  const dispatch = useDispatch();

  const history = useHistory();

  const goTo = (endpoint: string, pageName: string) => {
    dispatch(navigationActions.goTo(pageName));
    history.push(endpoint)
  }

  const goToNewPalette = () => {
    dispatch(paletteActions.selectPalette('0000'));
    dispatch(navigationActions.goTo('Nova paleta'));
    history.push('palette');
  }

  return (
    <Container style={{
      shadowColor: "#000", shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6
    }}>
      <ButtonContainer onPress={() => goTo('/home', 'Paletas')}>
        <Button
          style={{ backgroundColor: page === 'Paletas' ? theme.colors.primary : '#0000000a' }}>
          <SwatchbookIcon fill={page === 'Paletas' ? theme.colors.textPrimary : theme.colors.primary} />
        </Button>
      </ButtonContainer>

      <ButtonContainer onPress={goToNewPalette}>
        <Button
          style={{ backgroundColor: page === 'Nova paleta' ? theme.colors.primary : '#0000000a' }}>
          <AddIcon fill={page === 'Nova paleta' ? theme.colors.textPrimary : theme.colors.primary} />
        </Button>
      </ButtonContainer>

      <ButtonContainer onPress={() => goTo('/import', 'Importar arquivo')}>
        <Button
          style={{ backgroundColor: page === 'Importar arquivo' ? theme.colors.primary : '#0000000a' }}>
          <ImportIcon fill={page === 'Importar arquivo' ? theme.colors.textPrimary : theme.colors.primary} />
        </Button>
      </ButtonContainer>

      <ButtonContainer onPress={() => goTo('/export', 'Exportar arquivo')}>
        <Button
          style={{ backgroundColor: page === 'Exportar arquivo' ? theme.colors.primary : '#0000000a' }}>
          <ExportIcon fill={page === 'Exportar arquivo' ? theme.colors.textPrimary : theme.colors.primary} />
        </Button>
      </ButtonContainer>

      <ButtonContainer onPress={() => goTo('/search', 'Buscar cor')}>
        <Button
          style={{ backgroundColor: page === 'Buscar cor' ? theme.colors.primary : '#0000000a' }}>
          <CampickerIcon fill={page === 'Buscar cor' ? theme.colors.textPrimary : theme.colors.primary} />
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default Navbar;