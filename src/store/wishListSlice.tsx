import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { pokemonWishList } from './localStorageKeys';

export interface WishListSlice {
  count: number;
}

const initialState: WishListSlice = {
  count: JSON.parse(localStorage.getItem(pokemonWishList) || '[]').length,
};

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<string>) => {
      let wishList = JSON.parse(localStorage.getItem(pokemonWishList) || '[]');

      if (!wishList.includes(action.payload)) {
        wishList.push(action.payload);
        localStorage.setItem(pokemonWishList, JSON.stringify(wishList));
      }

      state.count = wishList.length;
    },
    removeFromWishList: (state, action: PayloadAction<string>) => {
      let wishList = JSON.parse(localStorage.getItem(pokemonWishList) || '[]');

      wishList = wishList.filter((item: string) => item !== action.payload);
      localStorage.setItem(pokemonWishList, JSON.stringify(wishList));
      state.count = wishList.length;
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;

export const selectPage = (state: RootState) => state.wishList.count;

export default wishListSlice.reducer;
