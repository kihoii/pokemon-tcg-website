import { configureStore } from '@reduxjs/toolkit';
import cardsPageReducer from './cardsPageSlice';
import wishListReducer from './wishListSlice';
import userCardsReducer from './userCardsSlice';

export const store = configureStore({
  reducer: {
    cardsPage: cardsPageReducer,
    wishList: wishListReducer,
    userCards: userCardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
