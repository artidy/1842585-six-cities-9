import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSelectedPoint, loadFavorites, loadOffers} from './actions';
import {DEFAULT_CITY, DEFAULT_SELECTED_POINT} from '../const';
import Hotel from '../types/hotel';
import Favorite from '../types/favorite';

const INITIAL_OFFERS: Hotel[] = [];
const INITIAL_FAVORITES: Favorite[] = [];

const initialState = {
  city: DEFAULT_CITY,
  cityOffers: INITIAL_OFFERS,
  cityFavorites: INITIAL_FAVORITES,
  selectedPoint: DEFAULT_SELECTED_POINT,
};

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.cityOffers = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.cityFavorites = action.payload;
    })
    .addCase(changeSelectedPoint, (state, action) => {
      state.selectedPoint = action.payload;
    }),
);

export {reducer};
