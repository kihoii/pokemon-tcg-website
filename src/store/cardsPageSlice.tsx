import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface CardsPageSlice {
  page: number;
  pageSize: number;
}

const initialState: CardsPageSlice = {
  page: 1,
  pageSize: 8,
};

export const cardsPageSlice = createSlice({
  name: 'cardsPage',
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    changePageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
  },
});

export const { changePage, changePageSize } = cardsPageSlice.actions;

export const selectPage = (state: RootState) => state.cardsPage.page;
export const selectPageSize = (state: RootState) => state.cardsPage.pageSize;

export default cardsPageSlice.reducer;
