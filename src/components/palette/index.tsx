import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-native";

import { Creators as navigationActions } from '../../store/ducks/navigation';
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

  const goToPallete = () => {
    dispatch(navigationActions.goTo('Paleta: ' + props.pallete.name));
    history.push(`palette/${props.index}`);
  }

  return (
    <Container onPress={goToPallete}>
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