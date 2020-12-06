import { IColor, IPallete,  } from "../interfaces"; 
import newID from '../utils/generateID';

class PalleteModel implements IPallete {
    id: string;
    name: string;
    description: string;
    colors: IColor[];
    modifiedDate: number;

    constructor(name: string, description: string, modifiedDate: number, colors: IColor[]) {
        this.id = newID();
        this.name = name;
        this.description = description;
        this.colors = colors;
        this.modifiedDate = modifiedDate;
    }

    insertColor(color: IColor) {
        this.colors.push(color);
    }

    removeColor(color: IColor) {
        const index = this.colors.indexOf(color);
        this.colors.splice(index, 1);
    }

    getDate() {
        return new Date(this.modifiedDate * 1000).toDateString();
    }
}

export default PalleteModel;