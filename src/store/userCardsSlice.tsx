import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { getItem, setItem } from '../services/localStorageService';
import { hasUserCards } from './localStorageKeys';

export interface UserCardsSlice {
  hasCards: boolean;
}

const initialState: UserCardsSlice = {
  hasCards: getItem<boolean>(hasUserCards, false), //тут должен быть запрос на наличие карточки у пользователя
};

export const userCardsSlice = createSlice({
  name: 'userCards',
  initialState,
  reducers: {
    setHasUserCard: (state) => {
      state.hasCards = true;
      setItem<boolean>(hasUserCards, true);
    },
  },
});

export const { setHasUserCard } = userCardsSlice.actions;

export const selectPage = (state: RootState) => state.userCards;

export default userCardsSlice.reducer;
