import React from 'react';

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

const NewColorModal = (props: {toggleModal: () => void}) => {
  // console.log('[Menu] render');

  return (
    <>
      <OutsideArea onTouchStart={props.toggleModal} />
      <Container>
        <Modal>
          <Header>
            <Title>Nova cor</Title>
            <CloseButton onPress={props.toggleModal} />
          </Header>
          <Body>
            
          </Body>
          <Footer>
   
          </Footer>
        </Modal>
      </Container>
    </>
  );
}

export default NewColorModal;