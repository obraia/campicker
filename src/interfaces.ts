import { DefaultTheme } from "styled-components";

export interface IButtonProps {
  command: string;
  type: string;
  icon: any;
}

export interface IThemeState {
  theme: DefaultTheme;
}

export interface ICalcState {
  result: string;
  expression: string;
}

export interface IMenuState {
  isOpen: Boolean;
}

export interface IPaletteState {
  palettes: IPalette[];
  selectedPalette: IPalette;
}


export interface IProductState {
  products: IProduct[];
}

export interface IUser {
  username: string;
  password: string;
  rememberMe: boolean;
}

export interface IProduct {
  barcodeA: string;
  barcodeB: string;
  description: string;
  counts: IQuantity[];
  expectedCount: number;
}

export interface IColor {
  id: string;
  name: string;
  description: string;
  hex: string;
  rgb: IRGB;
  modifiedDate: number;
  average?: number;
}

export interface IPalette {
  id: string;
  name: string;
  description: string;
  colors: IColor[];
  modifiedDate?: number;
  insertColor? (color: IColor): void;
  removeColor? (color: IColor): void;
  getDate? (): string;
}

export interface IRGB {
  R: number;
  G: number;
  B: number;
}

export interface IQuantity {
  quantity: number;
  date: string;
  timestamp: number;
}

export interface ICameraState {
  colorDetected: string;
  similarColors: IColor[];
}

export interface INavigationState {
  page: string;
}

export interface IAuthState {
  isAuthenticated: boolean;
  token: string;
}

export interface IReducers {
  themeReducers: IThemeState;
  menuReducers: IMenuState;
  paletteReducers: IPaletteState;
  navigationReducers: INavigationState;
  authReducers: IAuthState;
}