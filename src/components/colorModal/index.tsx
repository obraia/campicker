import React, { useState, useEffect } from 'react';
import Slider from '@react-native-community/slider'
import { useSelector } from 'react-redux';

import useDebounce from '../../utils/useDebounce';
import { rgbToHex, hexToRgb } from '../../utils/colors';

import { IColor, IReducers } from '../../interfaces';
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
  RgbInput,
  Footer,
  ColorPreview,
  FooterButton,
  FooterButtonText,
  OutsideArea
} from './styles';

const ColorModal = (props: {
  toggleModal: () => void,
  paletteId: string,
  colors: IColor[],
  setColors: (color: IColor[]) => void,
  colorIndex: number
}) => {
  // console.log('[Menu] render');

  const { theme } = useSelector((state: IReducers) => state.themeReducers);

  const [colorName, setColorName] = useState('');
  const [colorDescription, setColorDescription] = useState('');
  const [colorHex, setColorHex] = useState('#');

  const submitColor = () => {
    const color = new ColorModel(colorName, colorDescription, colorHex, props.paletteId);

    if (props.colorIndex === -1) {
      props.setColors([...props.colors, color]);
    } else {
      color.id = props.colors[props.colorIndex].id;
      const auxColors = [...props.colors];
      auxColors[props.colorIndex] = color;
      props.setColors([...auxColors]);
    }

    props.toggleModal();
  }

  const setRgbColor = (R?: number, G?: number, B?: number) => {
    const rgb = hexToRgb(colorHex);

    if (R !== undefined) rgb.R = R;
    else if (G !== undefined) rgb.G = G;
    else if (B !== undefined) rgb.B = B;

    setColorHex(rgbToHex(rgb));
  }

  // -> Update inputs values in edit mode
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

            <Item>
              <ItemTitle children={'R'} />
              <Slider
                style={{ flex: 1 }}
                step={1}
                value={useDebounce(hexToRgb(colorHex).R, 500)}
                onValueChange={value => setRgbColor(value, undefined, undefined)}
                minimumValue={0}
                maximumValue={255}
                thumbTintColor={theme.colors.primary}
                minimumTrackTintColor={theme.colors.primary} />

              <RgbInput
                keyboardType={'numeric'}
                maxLength={3}
                value={hexToRgb(colorHex).R.toString()}
                defaultValue={'0'}
                onChangeText={value => setRgbColor(Number(value), undefined, undefined)} />
            </Item>

            <Item>
              <ItemTitle children={'G'} />
              <Slider
                style={{ flex: 1 }}
                step={1}
                value={useDebounce(hexToRgb(colorHex).G, 500)}
                onValueChange={value => setRgbColor(undefined, value, undefined)}
                minimumValue={0}
                maximumValue={255}
                thumbTintColor={theme.colors.primary}
                minimumTrackTintColor={theme.colors.primary} />

              <RgbInput
                keyboardType={'numeric'}
                maxLength={3}
                value={hexToRgb(colorHex).G.toString()}
                onChangeText={value => setRgbColor(undefined, Number(value), undefined)} />
            </Item>

            <Item>
              <ItemTitle children={'B'} />
              <Slider
                style={{ flex: 1 }}
                step={1}
                value={useDebounce(hexToRgb(colorHex).B, 500)}
                onValueChange={value => setRgbColor(undefined, undefined, value)}
                minimumValue={0}
                maximumValue={255}
                thumbTintColor={theme.colors.primary}
                minimumTrackTintColor={theme.colors.primary} />

              <RgbInput
                keyboardType={'numeric'}
                maxLength={3}
                value={hexToRgb(colorHex).B.toString()}
                onChangeText={value => setRgbColor(undefined, undefined, Number(value))} />
            </Item>

          </Body>
          <Footer>
            <ColorPreview style={{ backgroundColor: colorHex }} />
            <FooterButton disabled={!!(!colorName)} onPress={submitColor}>
              <FooterButtonText children={'salvar'} />
            </FooterButton>
          </Footer>
        </Modal>
      </Container>
    </>
  );
}

export default ColorModal;