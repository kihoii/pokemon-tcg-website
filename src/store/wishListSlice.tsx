import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { pokemonWishList } from './localStorageKeys';
import { LocalStorageService } from '../services/localStorageService';

export interface WishListSlice {
  count: number;
}

const initialState: WishListSlice = {
  count: LocalStorageService.getItem(pokemonWishList)?.length || 0,
};

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<string>) => {
      let wishList = LocalStorageService.getItem(pokemonWishList) || [];

      if (!wishList.includes(action.payload)) {
        wishList.push(action.payload);
        LocalStorageService.setItem(pokemonWishList, wishList);
      }

      state.count = wishList.length;
    },
    removeFromWishList: (state, action: PayloadAction<string>) => {
      let wishList = LocalStorageService.getItem(pokemonWishList) || [];

      wishList = wishList.filter((item: string) => item !== action.payload);
      LocalStorageService.setItem(pokemonWishList, wishList);
      state.count = wishList.length;
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;

export const selectPage = (state: RootState) => state.wishList.count;

export default wishListSlice.reducer;
