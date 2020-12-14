import { createActions, createReducer } from 'reduxsauce';

import { IPaletteState, IPalette } from "../../interfaces";
import PalleteModel from '../../models/PalleteModel';
import newID from '../../utils/generateID';

const INITIAL_STATE: IPaletteState = {
  selectedPalette: {} as IPalette,
  palettes: [
    {
      id: '0000',
      name: '',
      description: '',
      colors: [],
      modifiedDate: 1000000
    }
  ]
}

const importPalettes = (state = INITIAL_STATE, action: any) => {
  state.palettes = action.palettes;
  state.palettes.push({
    id: '0000',
    name: '',
    description: '',
    colors: [],
    modifiedDate: 1000000
  });
  return { ...state };
}

const selectPalette = (state = INITIAL_STATE, action: any) => {
  const palette = state.palettes.find(p => p.id === action.paletteId);
  return { ...state, selectedPalette: palette! };
}

const submitPalette = (state = INITIAL_STATE, action: any) => {
  const palettes: IPalette[] = state.palettes.map(p => ({ ...p, colors: [...p.colors] }));
  const paletteIndex = palettes.findIndex(p => p.id === action.palette.id);

  if (paletteIndex !== -1) {
    if (action.palette.id === '0000') {
      action.palette.id = newID();
      palettes.push({
        id: '0000',
        name: '',
        description: '',
        colors: [],
        modifiedDate: 1000000
      });
    }
    palettes[paletteIndex] = action.palette;
  }

  return { palettes, selectedPalette: { ...action.palette } };
}

const deletePalette = (state = INITIAL_STATE, action: any) => {
  const palettes: IPalette[] = state.palettes.map(p => ({ ...p, colors: [...p.colors] }));
  const paletteIndex = palettes.findIndex(p => p.id === action.paletteId);

  if (paletteIndex !== -1) palettes.splice(paletteIndex, 1);

  return { palettes, selectedPalette: {} as IPalette };
}

// Making Types and Creators
export const { Types, Creators } = createActions({
  selectPalette: ['paletteId'],
  importPalettes: ['palettes'],
  submitPalette: ['palette'],
  deletePalette: ['paletteId'],
});

// Making reducer
export default createReducer(INITIAL_STATE, {
  [Types.SELECT_PALETTE]: selectPalette,
  [Types.IMPORT_PALETTES]: importPalettes,
  [Types.SUBMIT_PALETTE]: submitPalette,
  [Types.DELETE_PALETTE]: deletePalette,
});

const utils = {

}
