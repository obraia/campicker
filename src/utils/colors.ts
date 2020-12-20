import { IRGB } from "../interfaces";

const componentToHex = (c: number) => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (color: IRGB) => {
  return "#" + componentToHex(color.R) + componentToHex(color.G) + componentToHex(color.B);
}

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    R: parseInt(result[1], 16),
    G: parseInt(result[2], 16),
    B: parseInt(result[3], 16)
  } : { R: 0, G: 0, B: 0 };
}

export { rgbToHex, hexToRgb };