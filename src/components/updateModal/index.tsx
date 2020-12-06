import React from 'react';
import { ProgressBar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { IReducers } from '../../interfaces';
import { Creators as themeActions } from '../../store/ducks/theme';

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
  FooterText,
  OutsideArea
} from './styles';

const UpdateModal = () => {

  const { theme } = useSelector((state: IReducers) => state.themeReducers);

  return (
    <>
      <OutsideArea />
      <Container>
        <Modal>
          <Header>
            <Title>Atualização disponível!</Title>
          </Header>
          <Body>
            <Item>
              <ItemTitle>Atualizando, aguarde um momento...</ItemTitle>
            </Item>
          </Body>
          <Footer>
            <FooterText>Versão 1.0.0</FooterText>
          </Footer>
        </Modal>
      </Container>
    </>
  );
}

export default UpdateModal;