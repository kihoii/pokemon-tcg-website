import { configureStore } from '@reduxjs/toolkit';
import cardsPageReducer from './cardsPageSlice';

export const store = configureStore({
  reducer: { cardsPage: cardsPageReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
