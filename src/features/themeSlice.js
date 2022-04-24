import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  backgroundColor: '#e2d4b7ff',
  borderColor: '#9c9583ff',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
});

export default themeSlice.reducer;
