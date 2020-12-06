import React from 'react';
import { Svg, Path } from 'react-native-svg';

const Swatchbook = (props: { fill?: string, size?: string }) => {
  return (
    <Svg height={props.size || "15px"} width={props.size || "15px"} aria-hidden="true" data-prefix="fal" data-icon="swatchbook" viewBox="0 0 512 512">
      <Path fill={props.fill} d="M96 432c8.84 0 16-7.16 16-16s-7.16-16-16-16-16 7.16-16 16 7.16 16 16 16zm384-112H327.77l107.65-107.65c12.5-12.5 12.5-32.76 0-45.26l-90.52-90.5c-6.25-6.25-14.44-9.37-22.63-9.37s-16.38 3.12-22.63 9.37L192 184.23V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v384c0 53.02 42.98 96 96 96h384c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zm-320 96c0 35.29-28.71 64-64 64s-64-28.71-64-64V288h128v128zm0-160H32v-96h128v96zm0-128H32V32h128v96zm32 101.47L322.24 99.22h.03l90.51 90.51L192 410.51V229.47zM480 480H167.76l128-128H480v128z">
      </Path>
    </Svg>
  );
}

export default Swatchbook;