import React, { memo, useMemo, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from "react-router-native";

import { IReducers, IProduct, IPalette, IColor } from '../../interfaces';
import { Creators as navigationActions } from '../../store/ducks/navigation';
import { Creators as paletteActions } from '../../store/ducks/palette';

import AddIcon from '../../components/svg/add';
import ImportIcon from '../../components/svg/import';
import ExportIcon from '../../components/svg/export';

import ConfirmButton from '../../components/confirmButton';
import Input from '../../components/input';

import PaletteModel from '../../models/PalleteModel';
import NewColorModal from '../../components/colorModal';

import {
  Container,
  Textarea,
  ListHeader,
  ListHeaderButton,
  ListContainer,
  ItemButton,
  ItemColorPreview,
  ItemText,
  CountWhiteSpace,
} from './styles';

const Palette = () => {
  // console.log('[Page render] Product');

  const history = useHistory();

  const { theme } = useSelector((state: IReducers) => state.themeReducers);
  const { selectedPalette } = useSelector((state: IReducers) => state.paletteReducers);

  const dispatch = useDispatch();

  const [paletteName, setPaletteName] = useState('');
  const [paletteDescription, setPaletteDescription] = useState('');
  const [colors, setColors] = useState<IColor[]>([]);
  const [colorIndex, setColorIndex] = useState(-1);
  const [colorModalIsOpen, setcColorModalIsOpen] = useState(false);

  const newColor = () => {
    setColorIndex(-1);
    toggleColorModal();
  }

  const editColor = (index: number) => {
    setColorIndex(index);
    toggleColorModal();
  }

  const deleteColor = (index: number) => {
    Alert.alert("Atenção!", "Tem certeza que deseja apagar essa cor?", [
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel"
      },
      { text: "Sim", onPress: () => confirmDelete(index) }
    ]);

    const confirmDelete = (index: number) => {
      const auxColors = [...colors];
      auxColors.splice(index, 1);
      setColors(auxColors);
    }
  }

  const submitPalette = () => {
    const newPalette: IPalette = new PaletteModel(paletteName, paletteDescription, [...colors]);
    newPalette.id = selectedPalette.id;

    dispatch(paletteActions.submitPalette(newPalette));
    dispatch(navigationActions.goTo('Paletas'));

    history.push('/home');
  }

  const toggleColorModal = () => {
    setcColorModalIsOpen(!colorModalIsOpen);
  }

  useEffect(() => {
    if (selectedPalette) {
      setPaletteName(selectedPalette.name);
      setPaletteDescription(selectedPalette.description);
      setColors(selectedPalette.colors);
    }
  }, []);

  const descriptionComponent = useMemo(() => (
    <Textarea placeholder={'Descrição do produto'}
      multiline={true}
      numberOfLines={4}
      value={paletteDescription}
      onChangeText={text => setPaletteDescription(text)}
      editable={true}
      textAlignVertical="top" />
  ), [paletteDescription]);

  const colorsComponent = useMemo(() => (
    colors.map((color, index) => (
      <ItemButton
        key={color.id}
        onPress={() => editColor(index)}
        onLongPress={() => deleteColor(index)}>
        <ItemColorPreview style={{ backgroundColor: color.hex }} />
        <ItemText children={`${color.name} - ${color.hex}`} />
      </ItemButton>
    ))
  ), [colors]);

  return (
    <>
      <Container>
        <Input
          placeholder={'Nome da paleta'}
          value={paletteName}
          onChangeText={text => setPaletteName(text)}
          mb={10} />

        {descriptionComponent}

        <ListHeader>
          {/* <ListHeaderButton>
            <ExportIcon fill={theme.colors.primary} />
          </ListHeaderButton>
          <ListHeaderButton>
            <ImportIcon fill={theme.colors.primary} />
          </ListHeaderButton> */}
          <ListHeaderButton onPress={newColor}>
            <AddIcon fill={theme.colors.primary} />
          </ListHeaderButton>
        </ListHeader>

        <ListContainer>
          {colorsComponent}
          <CountWhiteSpace />
        </ListContainer>

        <ConfirmButton onPress={submitPalette} disabled={!!!paletteName} text={'Salvar paleta'} />

      </Container>
      {colorModalIsOpen &&
        <NewColorModal
          toggleModal={toggleColorModal}
          colors={colors}
          setColors={setColors}
          colorIndex={colorIndex} />}
    </>
  );
}

export default memo(Palette);