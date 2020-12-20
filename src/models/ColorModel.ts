import { IColor, IRGB } from "../interfaces";
import newID from '../utils/generateID';
import { hexToRgb } from '../utils/colors';

class ColorModel implements IColor {
    id: string;
    paletteId?: string;
    name: string;
    description: string;
    hex: string;
    rgb: IRGB;
    modifiedDate: number;

    constructor(name: string, description: string, hex: string, paletteId?: string) {
        this.id = newID();
        this.paletteId = paletteId;
        this.name = name;
        this.description = description;
        this.hex = hex.toUpperCase();
        this.rgb = hexToRgb(hex);
        this.modifiedDate = new Date().getTime();
    }

    changeColor(hex: string) {
        this.hex = hex;
    }
}

export default ColorModel;