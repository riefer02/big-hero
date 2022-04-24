import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from '../features/settingsSlice';
import hudDisplayReducer from '../features/hudDisplaySlice';
import themeReducer from '../features/themeSlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    hudDisplay: hudDisplayReducer,
    theme: themeReducer,
  },
});
