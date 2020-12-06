import React from 'react';
import { IColor } from '../../interfaces';

import { Container, Color } from './styles';

const Colors = (props: { colors: IColor[] }) => {

  return (
    <Container>
      {props.colors?.map(c => (<Color key={c.id} style={{ backgroundColor: c.hex }} />))}
    </Container>
  );
}

export default Colors;