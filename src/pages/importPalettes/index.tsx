import React, { memo, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { useHistory } from "react-router-native";

import PaletteModel from '../../models/PalleteModel';

import { IReducers, IProduct, IPalette } from '../../interfaces';
import { Creators as paletteActions } from '../../store/ducks/palette';
import { Creators as navigationActions } from '../../store/ducks/navigation';

import UploadIcon from '../../components/svg/upload';
import Input from '../../components/input';
import ConfirmButton from '../../components/confirmButton';

import {
  Container,
  ImportButton,
  FileName,
  PreviewContainer,
  PreviewContainerWhiteSpace,
  PreviewLine,
  PreviewLineText,
} from './styles';
import ColorModel from '../../models/ColorModel';

const ImportFile = () => {
  // console.log('[Page render] Import products');

  const pageName = 'Importar arquivo';

  const history = useHistory();

  const { theme } = useSelector((state: IReducers) => state.themeReducers);
  const dispatch = useDispatch();

  const [fileName, setFileName] = useState('');
  const [palettes, setPalettes] = useState<IPalette[]>([]);
  const [confirmButtonEnable, setConfirmButtonEnable] = useState(false);

  const onpenFileDialog = async () => {
    const fileSelected = await DocumentPicker.getDocumentAsync({ type: 'application/json' });
    setFileName(fileSelected.name);

    try {
      if (fileSelected.type === "success") {
        const file = await FileSystem.readAsStringAsync(fileSelected.uri, { encoding: FileSystem.EncodingType.UTF8 });
        const data = JSON.parse(file);

        const auxPalettes = data.map((p: any) =>
          new PaletteModel(p.name, p.description, p.colors.map((c: any) =>
            new ColorModel(c.name, c.description, c.hex))));

        console.log(auxPalettes)
        setPalettes(auxPalettes);
        setConfirmButtonEnable(true);
      }
    } catch (err) {
      Alert.alert('Erro', 'Erro ao importar arquivo');
    }
  }

  const deleteLine = (index: number) => {
    // const newArrayProducts = products.filter(p => p.barcodeA !== barcode);
    // setProducts([...newArrayProducts]);
  }

  const importFile = () => {
    dispatch(paletteActions.importPalettes(palettes));
    dispatch(navigationActions.goTo('Paletas'));
    history.push('/home')
  }

  useEffect(() => {
    dispatch(navigationActions.goTo(pageName));
  }, [])

  return (
    <Container>
      <ImportButton onPress={onpenFileDialog}>
        <UploadIcon fill={theme.colors.primary} />
      </ImportButton>
      <Input value={fileName} placeholder={'Nome do arquivo'} editable={false} />
      <PreviewContainer>
        {palettes?.slice(0, 5).map((p, index) => (
          <PreviewLine key={p.id}
            onLongPress={() => deleteLine(index)}>
            <PreviewLineText>
              {p.name + ' - ' + p.description}
            </PreviewLineText>
          </PreviewLine>
        ))}
        <PreviewContainerWhiteSpace />
      </PreviewContainer>
      <ConfirmButton onPress={importFile} disabled={!confirmButtonEnable} text={'Importar arquivo'} />
    </Container>
  );
}

export default memo(ImportFile);