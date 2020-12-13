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

import NewColorModal from '../../components/colorModal';

import {
  Container,
  InputGroup,
  Textarea,
  ListHeader,
  ListHeaderButton,
  ListContainer,
  ItemButton,
  ItemColorPreview,
  ItemText,
  CountWhiteSpace,
} from './styles';
import { PaletteDescription } from '../../components/palette/styles';
import PaletteModel from '../../models/PalleteModel';

interface IPageParams {
  paletteId: string;
  previous: string;
}

const Palette = () => {
  // console.log('[Page render] Product');

  const history = useHistory();

  const { theme } = useSelector((state: IReducers) => state.themeReducers);
  const { selectedPalette } = useSelector((state: IReducers) => state.paletteReducers);

  const dispatch = useDispatch();

  const [paletteName, setPaletteName] = useState('');
  const [paletteDescription, setPaletteDescription] = useState('');
  const [colorToEdit, setColorToEdit] = useState<IColor>();
  const [colorModalIsOpen, setcColorModalIsOpen] = useState(false);

  const editColor = (color: IColor) => {
    setColorToEdit({ ...color });
    toggleColorModal();
  }

  const deleteColorById = (id: string) => {
    Alert.alert("Atenção!", "Tem certeza que deseja apagar essa cor?", [
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel"
      },
      { text: "Sim", onPress: () => confirmDelete(id) }
    ]);

    const confirmDelete = (colorId: string) => {
      dispatch(paletteActions.deleteColor(selectedPalette.id, colorId));
    }
  }

  const submitPalette = () => {
    const newPalette: IPalette = new PaletteModel(paletteName, paletteDescription, [...selectedPalette.colors]);
    newPalette.id = selectedPalette.id;

    dispatch(paletteActions.updatePalette(newPalette));
    dispatch(navigationActions.goTo('Paletas'));

    history.push('/home');
  }

  const toggleColorModal = () => {
    setcColorModalIsOpen(!colorModalIsOpen);
  }

  const newColor = () => {
    setColorToEdit(undefined);
    toggleColorModal();
  }

  useEffect(() => {
    if (selectedPalette) {
      setPaletteName(selectedPalette.name);
      setPaletteDescription(selectedPalette.description);
    }
  }, [])

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
    selectedPalette.colors.map(color => (
      <ItemButton
        key={color.id}
        onPress={() => editColor(color)}
        onLongPress={() => deleteColorById(color.id)}>
        <ItemColorPreview style={{ backgroundColor: color.hex }} />
        <ItemText children={`${color.name} - ${color.hex}`} />
      </ItemButton>
    ))
  ), [selectedPalette.colors]);

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
          <ListHeaderButton>
            <ExportIcon fill={theme.colors.primary} />
          </ListHeaderButton>
          <ListHeaderButton>
            <ImportIcon fill={theme.colors.primary} />
          </ListHeaderButton>
          <ListHeaderButton onPress={newColor}>
            <AddIcon fill={theme.colors.primary} />
          </ListHeaderButton>
        </ListHeader>

        <ListContainer>
          {colorsComponent}
          <CountWhiteSpace />
        </ListContainer>

        {/* <InputGroup>
        <ControlQuantityButton onPress={() => setQuantity(-1)}>
          <ArrowLeft fill={theme.colors.primary} />
        </ControlQuantityButton>
        <InputDescription
          keyboardType='numeric'
          maxLength={4}
          value={productQuantity.toString()}
          onChangeText={value => setDirectQuantity(value)} />
        <ControlQuantityButton onPress={() => setQuantity(1)}>
          <ArrowRight fill={theme.colors.primary} />
        </ControlQuantityButton>
      </InputGroup> */}

        <ConfirmButton onPress={submitPalette} disabled={false} text={'Salvar paleta'} />

      </Container>
      {colorModalIsOpen &&
        <NewColorModal
          toggleModal={toggleColorModal}
          paletteId={selectedPalette.id}
          color={colorToEdit} />}
    </>
  );
}

export default memo(Palette);