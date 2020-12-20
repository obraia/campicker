import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from "react-router-native";

import { IReducers } from '../../interfaces';
import { Creators as paletteActions } from '../../store/ducks/palette';

import SwatchbookIcon from '../svg/swatchbook';
import AddIcon from '../svg/add';
import ImportIcon from '../svg/import';
import ExportIcon from '../svg/export';
import CampickerIcon from '../svg/campicker';

import { Container, ButtonContainer, Button } from './styles';

const Navbar = () => {
  // console.log('[Navbar] render');

  const { theme } = useSelector((state: IReducers) => state.themeReducers);
  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation();

  const goTo = (endpoint: string) => {
    if (endpoint === '/palette') dispatch(paletteActions.selectPalette('0000'));
    history.push(endpoint);  
  }

  const items = [
    {
      route: '/home',
      icon: SwatchbookIcon
    },
    {
      route: '/palette',
      icon: AddIcon
    },
    {
      route: '/import',
      icon: ImportIcon
    },
    {
      route: '/export',
      icon: ExportIcon
    },
    {
      route: '/search',
      icon: CampickerIcon
    },
  ];

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

      {items.map(item => (
        <ButtonContainer onPress={() => goTo(item.route)}>
          <Button
            style={{ backgroundColor: location.pathname === item.route ? theme.colors.primary : '#0000000a' }}>
            <item.icon fill={location.pathname === item.route ? theme.colors.textPrimary : theme.colors.primary} />
          </Button>
        </ButtonContainer>
      ))}
    </Container>
  );
}

export default Navbar;