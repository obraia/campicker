import { createActions, createReducer } from 'reduxsauce';

import { IPaletteState, IPalette } from "../../interfaces";
import PalleteModel from '../../models/PalleteModel';

const INITIAL_STATE: IPaletteState = {
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
    }
  ]
}

const importPalettes = (state = INITIAL_STATE, action: any) => {
  state.palettes = [];
  state.palettes = action.value;
  return { ...state };
}

const updatePalette = (state = INITIAL_STATE, action: any) => {
  state.palettes[action.index] = action.palette;
  return { ...state };
}

// Making Types and Creators
export const { Types, Creators } = createActions({
  importPalettes: ['value'],
  updatePalette: ['palette', 'index']
});

// Making reducer
export default createReducer(INITIAL_STATE, {
  [Types.IMPORT_PALETTES]: importPalettes,
  [Types.UPDATE_PALETTE]: updatePalette,
});

const utils = {

}
