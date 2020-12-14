import {IRGB} from '../interfaces';

const getDifference = (c1: IRGB, c2: IRGB) => {
  const distance = Math.sqrt((c2.R - c1.R) ^ 2 + (c2.G - c1.G) ^ 2 + (c2.B - c1.B) ^ 2);
  return distance / Math.sqrt((255) ^ 2 + (255) ^ 2 + (255) ^ 2);
}

export default getDifference;