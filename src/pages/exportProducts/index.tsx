import React, { memo, useState, useMemo, useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import moment from 'moment';
import { Switch } from 'react-native-paper';

import { IReducers, IProduct } from '../../interfaces';

import ExportIcon from '../../components/svg/export-v2';
import ConfirmButton from '../../components/confirmButton';

import {
  Container,
  FileTypeButton,
  FileType,
  FileName,
  ExportType,
  ExportTypeText,
  PreviewContainer,
  PreviewContainerWhiteSpace,
  PreviewLine,
  PreviewLineText,
} from './styles';

const ExportFile = () => {
  // console.log('[Page render] Export products');

  const { theme } = useSelector((state: IReducers) => state.themeReducers);
  const { products } = useSelector((state: IReducers) => state.productsReducers);

  const [fileName, setFileName] = useState('estoque-' + moment().format('DD-MM-YYYY-HHmm'));
  const [fileType, setFileType] = useState('.txt');
  const [willExportDivergences, setWillExportDivergences] = useState(false);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const productsToLines: string[] = [];

    if (!willExportDivergences) {
      products.forEach(product => {
        product.counts.forEach(count => {
          productsToLines.push(`${product.barcodeA || product.barcodeB};${count.quantity};${count.date}`.replace(/(\r\n|\n|\r)/gm, ""));
        });
      });
    } else {
      products.forEach(product => {
        const totalCounts = getTotalCounts(product);
        if (totalCounts != product.expectedCount) {
          productsToLines.push(`${product.barcodeA || product.barcodeB};${product.description};${totalCounts};${product.expectedCount}`.replace(/(\r\n|\n|\r)/gm, ""));
        }
      });
    }

    setLines(productsToLines);
  }, [willExportDivergences]);

  const getTotalCounts = (product: IProduct) => {
    let total = 0;
    product.counts.forEach(count => total += count.quantity);
    return total;
  }

  const exportFile = async () => {
    const fileUri = `${FileSystem.documentDirectory + fileName + fileType}`;
    let contents = lines.join('\n');

    try {
      await FileSystem.writeAsStringAsync(fileUri, contents, { encoding: FileSystem.EncodingType.UTF8 });
      await Sharing.shareAsync(fileUri);
    } catch (err) {
      Alert.alert('Erro', 'Erro ao exportar aquirvo');
    }
  }

  const toggleFileType = () => {
    setFileType(fileType === '.txt' ? '.csv' : '.txt');
  }

  const previewListComponent = useMemo(() => (
    <PreviewContainer>
      {lines.slice(0, 5).map((line, index) => (
        <PreviewLine key={(index)}>
          <PreviewLineText>{line}</PreviewLineText>
        </PreviewLine>
      ))}
      <PreviewContainerWhiteSpace />
    </PreviewContainer>
  ), [lines]);

  return (
    <Container>
      <FileTypeButton onPress={toggleFileType}>
        <ExportIcon fill={theme.colors.primary} />
        <FileType>{fileType}</FileType>
      </FileTypeButton>
      <FileName value={fileName} placeholder={'Nome do arquivo'} onChangeText={value => setFileName(value)} />
      <ExportType>
        <ExportTypeText>Exportar divergências</ExportTypeText>
        <Switch value={willExportDivergences}
          onValueChange={() => setWillExportDivergences(!willExportDivergences)}
          color={theme.colors.primary} />
      </ExportType>
      {previewListComponent}
      <ConfirmButton onPress={exportFile} disabled={products.length === 0} text={'Exportar arquivo'} />
    </Container>
  );
}

export default memo(ExportFile);