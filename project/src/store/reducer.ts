import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadFavorites, loadOffers} from './actions';
import {DEFAULT_CITY} from '../const';
import Hotel from '../types/hotel';
import Favorite from '../types/favorite';

const INITIAL_OFFERS: Hotel[] = [];
const INITIAL_FAVORITES: Favorite[] = [];

const initialState = {
  city: DEFAULT_CITY,
  placeCount: 0,
  offers: INITIAL_OFFERS,
  favorites: INITIAL_FAVORITES,
};

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    }),
);

export {reducer};
