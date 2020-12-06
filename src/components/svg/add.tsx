import React from 'react';
import { Svg, Path } from 'react-native-svg';

const Add = (props: { fill?: string }) => {
  return (
    <Svg height="15px" width="15px" aria-hidden="true"data-prefix="far" data-icon="plus" viewBox="0 0 384 512">
      <Path fill={props.fill} d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z">
      </Path>
    </Svg>
  );
}

export default Add;