import { IColor } from "../interfaces";
import newID from '../utils/generateID';

class ColorModel implements IColor {
    id: string;
    name: string;
    description: string;
    hex: string;
    modifiedDate: number;

    constructor(name: string, description: string, hex: string) {
        this.id = newID();
        this.name = name;
        this.description = description;
        this.hex = hex;
        this.modifiedDate = new Date().getTime();
    }

    changeColor(hex: string) {
        this.hex = hex;
    }
}

export default ColorModel;