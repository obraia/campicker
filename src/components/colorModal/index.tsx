import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Creators as paletteActions } from '../../store/ducks/palette';

import { IColor } from '../../interfaces';
import ColorModel from '../../models/ColorModel';

import Input from '../input';

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
  ColorPreview,
  FooterButton,
  FooterText,
  OutsideArea
} from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const NewColorModal = (props: {
  toggleModal: () => void,
  colors: IColor[],
  setColors: (color: IColor[]) => void,
  colorIndex: number
}) => {
  // console.log('[Menu] render');

  const [colorName, setColorName] = useState('');
  const [colorDescription, setColorDescription] = useState('');
  const [colorHex, setColorHex] = useState('#');

  const dispatch = useDispatch();

  const submitColor = () => {
    const color = new ColorModel(colorName, colorDescription, colorHex);

    if (props.colorIndex === -1) {
      props.setColors([...props.colors, color]);
      // dispatch(paletteActions.insertColor(props.paletteId, color));
    } else {
      color.id = props.colors[props.colorIndex].id;
      const auxColors = [...props.colors];
      auxColors[props.colorIndex] = color;
      props.setColors([...auxColors]);
      // dispatch(paletteActions.updateColor(props.paletteId, color));
    }

    props.toggleModal();
  }

  // const [isValid, setIsValid] = useState(false);

  // const isValid = () => {
  //   return colorName && (/^#[0-9A-F]{6}$/i.test(colorHex))
  // }

  // useEffect(() => {
  //   setIsValid((/^#[0-9A-F]{6}$/i.test(colorHex)));
  // }, [colorName, colorHex])

  useEffect(() => {
    if (props.colorIndex !== -1) {
      setColorName(props.colors[props.colorIndex].name);
      setColorDescription(props.colors[props.colorIndex].description);
      setColorHex(props.colors[props.colorIndex].hex);
    }
  }, [props.colorIndex])


  return (
    <>
      <OutsideArea />
      <Container>
        <Modal>
          <Header>
            {props.colorIndex !== -1 ? <Title>Editar cor</Title> : <Title>Nova cor</Title>}
            <CloseButton onPress={props.toggleModal} />
          </Header>
          <Body>
            <Input
              placeholder={'Nome da cor'}
              value={colorName}
              onChangeText={v => setColorName(v)} />

            <Input
              placeholder={'Descrição da cor'}
              value={colorDescription}
              onChangeText={v => setColorDescription(v)}
              mt={10} mb={10} />

            <Input
              placeholder={'Hexadecimal da cor'}
              value={colorHex}
              onChangeText={v => setColorHex(v)} />
          </Body>
          <Footer>
            <ColorPreview style={{ backgroundColor: colorHex }} />
            <FooterButton disabled={!!(!colorName)} onPress={submitColor} />
          </Footer>
        </Modal>
      </Container>
    </>
  );
}

export default NewColorModal;