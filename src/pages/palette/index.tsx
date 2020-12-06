import React, { memo, useMemo, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory, useParams } from "react-router-native";

import { IReducers, IProduct, IPalette } from '../../interfaces';
import { Creators as navigationActions } from '../../store/ducks/navigation';


import AddIcon from '../../components/svg/add';
import ImportIcon from '../../components/svg/import';
import ExportIcon from '../../components/svg/export';
import ConfirmButton from '../../components/confirmButton';

import {
  Container,
  InputGroup,
  Input,
  Textarea,
  ListHeader,
  ListHeaderButton,
  ListContainer,
  ItemButton,
  ItemColorPreview,
  ItemText,
  CountWhiteSpace,
} from './styles';

interface IPageParams {
  index: string;
  previous: string;
}

const Palette = () => {
  // console.log('[Page render] Product');

  const { index, previous } = useParams<IPageParams>();
  const history = useHistory();

  const { theme } = useSelector((state: IReducers) => state.themeReducers);
  const { palettes } = useSelector((state: IReducers) => state.paletteReducers);
  const dispatch = useDispatch();

  const [palette, setPalette] = useState<IPalette>({ ...palettes[parseInt(index)] });
  const [productQuantity, setProductQuantity] = useState(0);
  const [hadDeletes, setHadDeletes] = useState(false);
  const [deletedAll, setDeletedAll] = useState(false);

  const setQuantity = (value: Number) => {
    const newValue = Number(productQuantity) + Number(value);
    if (newValue >= 0 && newValue <= 9999) setProductQuantity(newValue);
  }

  const setDirectQuantity = (value: string) => {
    const quantity = isNaN(Number(value)) ? 0 : Number(value);
    setProductQuantity(quantity);
  }

  const deleteColorById = (id: string) => {
    Alert.alert("Atenção!", "Tem certeza que deseja apagar a cor?", [
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel"
      },
      { text: "Sim", onPress: () => confirmDelete() }
    ]);

    const confirmDelete = () => {
      const newPalette: IPalette = { ...palette, colors: [...palette.colors] };
      // newPalette.colors.splice(indexCount, 1);
      setPalette(newPalette);
      setHadDeletes(true);
    }
  }

  const confirmChanges = () => {
    dispatch(navigationActions.goTo('Paletas'));
    history.push('/home');
    // if (previous == 'search') {
    //   dispatch(navigationActions.goTo('Buscar produto'));
    //   history.push('/search');
    // } else {
    //   dispatch(navigationActions.goTo('Paletas'));
    //   history.push('/');
    // }
  }

  const descriptionComponent = useMemo(() => (
    <Textarea placeholder={'Descrição do produto'}
      multiline={true}
      numberOfLines={4}
      value={palette?.description}
      onChangeText={text => setPalette({ ...palette, description: text })}
      editable={true}
      textAlignVertical="top" />
  ), [palette]);

  const colorsComponent = useMemo(() => (
    palette?.colors.map(color => (
      <ItemButton key={color.id} onLongPress={() => deleteColorById(color.id)}>
        <ItemColorPreview style={{ backgroundColor: color.hex }} />
        <ItemText children={`${color.name} - ${color.hex}`} />
      </ItemButton>
    ))
  ), [palette]);

  return (
    <Container>
      <Input />

      {descriptionComponent}
      
      <ListHeader>
        <ListHeaderButton>
          <ExportIcon fill={theme.colors.primary}/>
        </ListHeaderButton>
        <ListHeaderButton>
          <ImportIcon fill={theme.colors.primary}/>
        </ListHeaderButton>
        <ListHeaderButton>
          <AddIcon fill={theme.colors.primary}/>
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

      {/* <ConfirmButton onPress={confirmChanges} disabled={false} text={'Salvar paleta'} /> */}
    </Container>
  );
}

export default memo(Palette);