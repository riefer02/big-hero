import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  themeColor: '#000000',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
});

export default settingsSlice.reducer;
