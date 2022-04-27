import { createSlice } from '@reduxjs/toolkit';
import stoneTexture from '../assets/images/stones-texture.jpeg';

const initialState = {
  backgroundColor: '#e2d4b7ff',
  borderColor: '#525252',
  stoneTexture: stoneTexture,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
});

export default themeSlice.reducer;
