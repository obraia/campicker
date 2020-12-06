import { createActions, createReducer } from 'reduxsauce';
import { ICameraState } from "../../interfaces";
import colorgram from 'colorgram';


const INITIAL_STATE: ICameraState = {
  colorDetected: "",
  similarColors: [],
}

const handleImage = (state: ICameraState = INITIAL_STATE, action: any) => {
  const pallete = colorgram.extract(action.value)
  state.colorDetected = pallete[0];

  console.log(pallete)

  return { ...state };
}

// Making Types and Creators
export const { Types, Creators } = createActions({
  handleImage: null,
});

// Making reducer
export default createReducer(INITIAL_STATE, {
  [Types.HANDLE_IMAGE]: handleImage,
});

const utils = {

}
