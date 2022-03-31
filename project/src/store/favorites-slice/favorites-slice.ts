import {createSlice} from '@reduxjs/toolkit';

import {NameSpace} from '../../const';
import Favorite from '../../types/favorite';

const INITIAL_FAVORITES: Favorite[] = [];

const initialState = {
  favorites: INITIAL_FAVORITES,
  favoritesLoaded: false,
};

const favoritesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {
    fetchFavorites: (state, action) => {
      state.favorites = action.payload;
      state.favoritesLoaded = true;
    },
    setFavoriteLoading: (state) => {
      state.favoritesLoaded = false;
    },
  },
});

const {fetchFavorites, setFavoriteLoading} = favoritesSlice.actions;

export {favoritesSlice, fetchFavorites, setFavoriteLoading};
