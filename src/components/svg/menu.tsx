import React from 'react';
import { Svg, Path } from 'react-native-svg';

const Menu = (props: { fill?: string }) => {
  return (
    <Svg aria-hidden="true" data-prefix="far" data-icon="ellipsis-v" viewBox="0 0 128 512">
      <Path fill={props.fill} d="M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z">
      </Path>
    </Svg>
  );
}

export default Menu;