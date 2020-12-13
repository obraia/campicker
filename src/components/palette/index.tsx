import React from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-native";

import { Creators as navigationActions } from '../../store/ducks/navigation';
import { Creators as paletteActions } from '../../store/ducks/palette';

import { IPalette } from '../../interfaces';

import Colors from '../colors';

import {
  Container,
  Image,
  PaletteBody,
  PaletteHeader,
  PaletteName,
  PaletteDescription,
  ColorsQuantity
} from './styles';

const Pallete = (props: { pallete: IPalette, index: number }) => {

  const dispatch = useDispatch();
  const history = useHistory();

  const goToPalette = () => {
    dispatch(paletteActions.selectPalette(props.pallete.id));
    dispatch(navigationActions.goTo('Paleta: ' + props.pallete.name));
    history.push('palette');
  }

  const deletePalette = () => {
    Alert.alert("Atenção!", "Tem certeza que deseja apagar essa paleta?", [
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel"
      },
      {
        text: "Sim", onPress: () => {
          dispatch(paletteActions.deletePalette(props.pallete.id));
        }
      }
    ]);
  }

  return (
    <Container onPress={goToPalette} onLongPress={deletePalette}>
      <Image>
        <Colors colors={props.pallete.colors} />
        <ColorsQuantity>{props.pallete.colors.length}</ColorsQuantity>
      </Image>
      <PaletteBody>
        <PaletteHeader>
          <PaletteName>{props.pallete.name}</PaletteName>
        </PaletteHeader>
        <PaletteDescription>{props.pallete.description}</PaletteDescription>
      </PaletteBody>
    </Container>
  );
}

export default Pallete;