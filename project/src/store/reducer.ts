import {createReducer} from '@reduxjs/toolkit';
import {
  authorization,
  changeCity,
  changeSelectedPoint,
  changeSortingType,
  fetchHotels,
  loadFavorites,
  loadOffers,
  requireAuthorization
} from './actions';
import {AuthorizationStatus, DEFAULT_CITY, DEFAULT_SELECTED_POINT, SortingType} from '../const';
import Hotel from '../types/hotel';
import Favorite from '../types/favorite';
import {User} from '../types/user';

const INITIAL_OFFERS: Hotel[] = [];
const INITIAL_FAVORITES: Favorite[] = [];
const INITIAL_USER: User = null as User;

const initialState = {
  city: DEFAULT_CITY,
  cityOffers: INITIAL_OFFERS,
  cityFavorites: INITIAL_FAVORITES,
  selectedPoint: DEFAULT_SELECTED_POINT,
  sortingType: SortingType.Popular.toString(),
  offers: INITIAL_OFFERS,
  favorite: INITIAL_FAVORITES,
  offersLoaded: false,
  favoriteLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: INITIAL_USER,
};

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(fetchHotels, (state, action) => {
      state.offers = action.payload;
      state.offersLoaded = true;
    })
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
    })
    .addCase(changeSortingType, (state, action) => {
      state.sortingType = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(authorization, (state, action) => {
      state.user = action.payload;
    }),
);

export {reducer};
