import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { pokemonWishList } from './localStorageKeys';
import { getItem, setItem } from '../services/localStorageService';

export interface WishListSlice {
  count: number;
}

const initialState: WishListSlice = {
  count: getItem<string[]>(pokemonWishList, [])?.length,
};

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<string>) => {
      let wishList = getItem<string[]>(pokemonWishList, []);

      if (!wishList.includes(action.payload)) {
        wishList.push(action.payload);
        setItem(pokemonWishList, wishList);
      }

      state.count = wishList.length;
    },
    removeFromWishList: (state, action: PayloadAction<string>) => {
      let wishList = getItem<string[]>(pokemonWishList, []);

      wishList = wishList.filter((item: string) => item !== action.payload);
      setItem(pokemonWishList, wishList);
      state.count = wishList.length;
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;

export const selectPage = (state: RootState) => state.wishList.count;

export default wishListSlice.reducer;
