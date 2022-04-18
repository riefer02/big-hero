import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from '../features/settingsSlice'
import hudDisplayReducer from '../features/hudDisplaySlice';

export const store = configureStore({
  reducer: {
      settings: settingsReducer,
      hudDisplay: hudDisplayReducer,
  },
})