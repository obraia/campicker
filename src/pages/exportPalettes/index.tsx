import React, { memo, useState, useMemo, useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import moment from 'moment';
import { Switch } from 'react-native-paper';

import { Creators as navigationActions } from '../../store/ducks/navigation';

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

  const pageName = 'Exportar arquivo';

  const { theme } = useSelector((state: IReducers) => state.themeReducers);
  const { palettes } = useSelector((state: IReducers) => state.paletteReducers);

  const [fileName, setFileName] = useState('palettes-' + moment().format('DD-MM-YYYY-HHmm'));
  const [fileType, setFileType] = useState('.json');

  const dispatch = useDispatch();

  const exportFile = async () => {
    const fileUri = `${FileSystem.documentDirectory + fileName + fileType}`;
    
    let contents = palettes.map(p => ({
      name: p.name,
      description: p.description,
      colors: p.colors.map(c => ({
        name: c.name,
        description: c.description,
        hex: c.hex
      }))
    }));

    contents.pop();

    try {
      await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(contents), { encoding: FileSystem.EncodingType.UTF8 });
      await Sharing.shareAsync(fileUri);
    } catch (err) {
      Alert.alert('Erro', 'Erro ao exportar aquirvo');
    }
  }

  const toggleFileType = () => {
    setFileType(fileType === '.json' ? '.txt' : '.json');
  }

  useEffect(() => {
    dispatch(navigationActions.goTo(pageName));
  }, [])

  const previewListComponent = useMemo(() => (
    <PreviewContainer>
      {palettes.slice(0, palettes.length - 1).map((p, index) => (
        <PreviewLine key={(index)}>
          <PreviewLineText>{p.name + ' - ' + p.description}</PreviewLineText>
        </PreviewLine>
      ))}
      <PreviewContainerWhiteSpace />
    </PreviewContainer>
  ), [palettes]);

  return (
    <Container>
      <FileTypeButton onPress={toggleFileType}>
        <ExportIcon fill={theme.colors.primary} />
        <FileType>{fileType}</FileType>
      </FileTypeButton>
      <FileName value={fileName} placeholder={'Nome do arquivo'} onChangeText={value => setFileName(value)} />
      {previewListComponent}
      <ConfirmButton onPress={exportFile} disabled={palettes.length === 0} text={'Exportar arquivo'} />
    </Container>
  );
}

export default memo(ExportFile);