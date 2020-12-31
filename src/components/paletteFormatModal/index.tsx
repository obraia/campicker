import React from 'react';

import {
  Container,
  Modal,
  Header,
  Title,
  CloseButton,
  Body,
  CodeContainer,
  CodeBlock,
  CodeLine,
  CodeKey,
  CodeValue,
  CodeValueString,
  CodeElement,
  Footer,
  OutsideArea
} from './styles';

const PaletteFormatModal = (props: {
  toggleModal: () => void,
}) => {
  // console.log('[Menu] render');

  return (
    <>
      <OutsideArea onTouchStart={props.toggleModal} />
      <Container>
        <Modal>
          <Header>
            <Title children={'Formato do arquivo JSON'} />
            <CloseButton onPress={props.toggleModal} />
          </Header>
          <Body>

            <CodeContainer>

              <CodeLine>
                <CodeElement children={'['} />
              </CodeLine>

              <CodeBlock>
                <CodeLine>
                  <CodeElement children={'{'} />
                </CodeLine>

                <CodeBlock>

                  <CodeLine>
                    <CodeKey children={'"name"'} />
                    <CodeElement children={':'} />
                    <CodeValueString children={'"Nome da paleta."'} />
                  </CodeLine>

                  <CodeLine>
                    <CodeKey children={'"description"'} />
                    <CodeElement children={':'} />
                    <CodeValueString children={'"Descrição da paleta."'} />
                  </CodeLine>

                  <CodeLine>
                    <CodeKey children={'"colors"'} />
                    <CodeElement children={':'} />
                    <CodeElement children={'['} />
                  </CodeLine>

                  <CodeBlock>

                    <CodeLine>
                      <CodeElement children={'{'} />
                    </CodeLine>

                    <CodeLine>
                      <CodeKey children={'"name"'} />
                      <CodeElement children={':'} />
                      <CodeValueString children={'"Nome da cor."'} />
                    </CodeLine>

                    <CodeLine>
                      <CodeKey children={'"description"'} />
                      <CodeElement children={':'} />
                      <CodeValueString children={'"Descrição da cor."'} />
                    </CodeLine>

                    <CodeLine>
                      <CodeKey children={'"hex"'} />
                      <CodeElement children={':'} />
                      <CodeValueString children={'"#000000"'} />
                    </CodeLine>

                    <CodeLine>
                      <CodeElement children={'}'} />
                    </CodeLine>

                    <CodeElement children={'...'} />

                  </CodeBlock>

                  <CodeLine>
                    <CodeElement children={']'} />
                  </CodeLine>

                </CodeBlock>

                <CodeLine>
                  <CodeElement children={'}'} />
                </CodeLine>

                <CodeElement children={'...'} />

              </CodeBlock>

              <CodeLine>
                <CodeElement children={']'} />
              </CodeLine>

            </CodeContainer>

          </Body>
          <Footer>

          </Footer>
        </Modal>
      </Container>
    </>
  );
}

export default PaletteFormatModal;