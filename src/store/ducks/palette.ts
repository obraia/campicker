import { createActions, createReducer } from 'reduxsauce';

import { IPaletteState, IPalette } from "../../interfaces";
import PalleteModel from '../../models/PalleteModel';
import newID from '../../utils/generateID';

const INITIAL_STATE: IPaletteState = {
  selectedPalette: new PalleteModel('', '', []),
  palettes: [
    {
      id: '0001',
      name: 'Tons de branco',
      description: 'Paleta com vários tipos de cores brancas.',
      colors: [
        {
          id: '0001',
          name: 'Branco neve',
          description: '',
          hex: '#FFFAFA',
          modifiedDate: 1000000
        },
        {
          id: '0002',
          name: 'Branco fumaça',
          description: '',
          hex: '#F5F5F5',
          modifiedDate: 1000000
        },
        {
          id: '0003',
          name: 'Marfim',
          description: '',
          hex: '#FFFFF0',
          modifiedDate: 1000000
        },
        {
          id: '0004',
          name: 'Branco gelo',
          description: '',
          hex: '#DDD9CE',
          modifiedDate: 1000000
        },
        {
          id: '0005',
          name: 'Branco linho',
          description: '',
          hex: '#FAF0E6',
          modifiedDate: 1000000
        },
      ],
      modifiedDate: 1000000
    },
    {
      id: '0002',
      name: 'Tons de azul',
      description: 'Paleta com vários tipos de cores azuis.',
      colors: [
        {
          id: '0001',
          name: 'Azul',
          description: '',
          hex: '#0000FF',
          modifiedDate: 1000000
        },
        {
          id: '0002',
          name: 'Azul marinho',
          description: '',
          hex: '#120a8f',
          modifiedDate: 1000000
        },
        {
          id: '0003',
          name: 'Azul petróleo',
          description: '',
          hex: '#084d6e',
          modifiedDate: 1000000
        },
        {
          id: '0004',
          name: 'Azul cobalto',
          description: '',
          hex: '#0047ab',
          modifiedDate: 1000000
        },
        {
          id: '0005',
          name: 'Azul aço',
          description: '',
          hex: '#4682b4',
          modifiedDate: 1000000
        },
      ],
      modifiedDate: 1000000
    },
    {
      id: '0003',
      name: 'Tons de verde',
      description: 'Paleta com vários tipos de cores verdes.',
      colors: [
        {
          id: '0001',
          name: 'Verde escuro',
          description: '',
          hex: '#006400',
          modifiedDate: 1000000
        },
        {
          id: '0002',
          name: 'Verde grama',
          description: '',
          hex: '#7cfc00',
          modifiedDate: 1000000
        },
        {
          id: '0003',
          name: 'Verde lima',
          description: '',
          hex: '#32cd32',
          modifiedDate: 1000000
        },
        {
          id: '0004',
          name: 'Verde primavera',
          description: '',
          hex: '#00ff7f',
          modifiedDate: 1000000
        },
        {
          id: '0005',
          name: 'Verde floresta',
          description: '',
          hex: '#228b22',
          modifiedDate: 1000000
        },
      ],
      modifiedDate: 1000000
    },
    {
      id: '0004',
      name: 'Tons de vermelho',
      description: 'Paleta com vários tipos de cores vermelhas.',
      colors: [
        {
          id: '0001',
          name: 'Vermelho',
          description: '',
          hex: '#ff0000',
          modifiedDate: 1000000
        },
        {
          id: '0002',
          name: 'Tomate',
          description: '',
          hex: '#ff6347',
          modifiedDate: 1000000
        },
        {
          id: '0003',
          name: 'Bordô',
          description: '',
          hex: '#800000',
          modifiedDate: 1000000
        },
        {
          id: '0004',
          name: 'Escarlate',
          description: '',
          hex: '#ff2400',
          modifiedDate: 1000000
        },
        {
          id: '0005',
          name: 'Carmesim',
          description: '',
          hex: '#DC143C',
          modifiedDate: 1000000
        },
      ],
      modifiedDate: 1000000
    },
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
  state.palettes = [];
  state.palettes = action.value;
  return { ...state };
}

const selectPalette = (state = INITIAL_STATE, action: any) => {
  const palette = state.palettes.find(p => p.id === action.paletteId);
  return { ...state, selectedPalette: palette! };
}

const updatePalette = (state = INITIAL_STATE, action: any) => {
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

const insertColor = (state = INITIAL_STATE, action: any) => {
  const palettes: IPalette[] = state.palettes.map(p => ({ ...p, colors: [...p.colors] }));

  const palette = palettes.find(p => p.id === action.paletteId);
  if (palette) palette.colors.push(action.color)

  return { palettes, selectedPalette: palette! };
}

const updateColor = (state = INITIAL_STATE, action: any) => {
  const palettes: IPalette[] = state.palettes.map(p => ({ ...p, colors: [...p.colors] }));
  const palette = palettes.find(p => p.id === action.paletteId);

  if (palette) {
    const colorIndex = palette.colors.findIndex(c => c.id === action.color.id);
    if (colorIndex !== -1) palette.colors[colorIndex] = action.color;
  }

  return { palettes, selectedPalette: palette! };
}

const deleteColor = (state = INITIAL_STATE, action: any) => {
  const palettes: IPalette[] = state.palettes.map(p => ({ ...p, colors: [...p.colors] }));

  const palette = palettes.find(p => p.id === action.paletteId);

  if (palette) {
    const colorIndex = palette.colors.findIndex(c => c.id === action.colorId)
    if (colorIndex !== -1) palette.colors.splice(colorIndex, 1);
  }
  return { palettes, selectedPalette: palette! };
}

// Making Types and Creators
export const { Types, Creators } = createActions({
  selectPalette: ['paletteId'],
  importPalettes: ['value'],
  updatePalette: ['palette'],
  deletePalette: ['paletteId'], 
  insertColor: ['paletteId', 'color'],
  updateColor: ['paletteId', 'color'],
  deleteColor: ['paletteId', 'colorId'],
});

// Making reducer
export default createReducer(INITIAL_STATE, {
  [Types.SELECT_PALETTE]: selectPalette,
  [Types.IMPORT_PALETTES]: importPalettes,
  [Types.UPDATE_PALETTE]: updatePalette,
  [Types.DELETE_PALETTE]: deletePalette,
  [Types.INSERT_COLOR]: insertColor,
  [Types.UPDATE_COLOR]: updateColor,
  [Types.DELETE_COLOR]: deleteColor,
});

const utils = {

}
