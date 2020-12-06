import React, { memo, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { useHistory } from "react-router-native";

import ProductModel from '../../models/ProductModel';
import { IReducers, IProduct } from '../../interfaces';
import { Creators as paletteActions } from '../../store/ducks/palette';
import { Creators as navigationActions } from '../../store/ducks/navigation';

import UploadIcon from '../../components/svg/upload';
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

const ImportFile = () => {
  // console.log('[Page render] Import products');

  const history = useHistory();

  const { theme } = useSelector((state: IReducers) => state.themeReducers);
  const dispatch = useDispatch();

  const [fileName, setFileName] = useState('');
  const [products, setProducts] = useState<IProduct[]>([]);
  const [confirmButtonEnable, setConfirmButtonEnable] = useState(false);

  const onpenFileDialog = async () => {
    const fileSelected = await DocumentPicker.getDocumentAsync({ type: 'text/*' });
    setFileName(fileSelected.name);

    try {
      if (fileSelected.type === "success") {
        let file = await FileSystem.readAsStringAsync(fileSelected.uri, { encoding: FileSystem.EncodingType.UTF8 });

        file = file.replace(/"/g, "");
        const lines = file.split(/\r?\n/g);
        const products = [];

        for (let i = 0; i < lines.length; i++) {
          const product = lines[i].split(';');

          if (lines[i] && (product[0] + product[2]).length > 2) {
            products.push(new ProductModel(product[0], product[1], product[2].replace(/(\r\n|\n|\r)/gm, ""), product[3]));
          }
        }

        setProducts(products);
        setConfirmButtonEnable(true);
      }
    } catch (err) {
      Alert.alert('Erro', 'Erro ao importar arquivo');
    }
  }

  const deleteLineByCode = (barcode: string) => {
    const newArrayProducts = products.filter(p => p.barcodeA !== barcode);
    setProducts([...newArrayProducts]);
  }

  const importFile = () => {
    dispatch(paletteActions.importPalette(products));
    dispatch(navigationActions.goTo('Paletas'));
    history.push('/')
  }

  return (
    <Container>
      <ImportButton onPress={onpenFileDialog}>
        <UploadIcon fill={theme.colors.primary} />
      </ImportButton>
      <FileName value={fileName} placeholder={'Nome do arquivo'} editable={false} />
      <PreviewContainer>
        {products.slice(0, 5).map(product => (
          <PreviewLine key={(product.barcodeA + product.barcodeB)}
            onLongPress={() => deleteLineByCode(product.barcodeA)}>
            <PreviewLineText>
              {product.barcodeA + ';' + product.description + ';' + product.barcodeB + ';' + product.expectedCount}
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