import {createReducer} from '@reduxjs/toolkit';
import {
  authorization,
  changeCity,
  changeSelectedPoint,
  changeSortingType,
  fetchComments,
  fetchCurrentHotel,
  fetchHotels, fetchNearHotels,
  loadFavorites,
  loadOffers,
  requireAuthorization,
  setLoadingComments,
  setLoadingHotel,
  setLoadingNearHotels
} from './actions';
import {AuthorizationStatus, DEFAULT_CITY, DEFAULT_SELECTED_POINT, SortingType} from '../const';
import Hotel from '../types/hotel';
import Favorite from '../types/favorite';
import {User} from '../types/user';
import CurrentHotel from '../types/current-hotel';
import UserComment from '../types/user-comment';

const INITIAL_OFFERS: Hotel[] = [];
const INITIAL_FAVORITES: Favorite[] = [];
const INITIAL_USER: User = null as User;
const INITIAL_OFFER: CurrentHotel = null as CurrentHotel;
const INITIAL_NEAR_OFFERS: Hotel[] = [];
const INITIAL_COMMENTS: UserComment[] = [];

const initialState = {
  city: DEFAULT_CITY,
  cityOffers: INITIAL_OFFERS,
  cityFavorites: INITIAL_FAVORITES,
  selectedPoint: DEFAULT_SELECTED_POINT,
  sortingType: SortingType.Popular.toString(),
  offers: INITIAL_OFFERS,
  currentOffer: INITIAL_OFFER,
  nearHotels: INITIAL_NEAR_OFFERS,
  comments: INITIAL_COMMENTS,
  favorite: INITIAL_FAVORITES,
  offersLoaded: false,
  favoriteLoaded: false,
  currentOfferLoaded: true,
  nearOffersLoaded: true,
  commentsLoaded: true,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: INITIAL_USER,
};

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(fetchHotels, (state, action) => {
      state.offers = action.payload;
      state.offersLoaded = true;
    })
    .addCase(fetchCurrentHotel, (state, action) => {
      state.currentOffer = action.payload;
      state.city = state.currentOffer?.city || DEFAULT_CITY;
      state.currentOfferLoaded = true;
    })
    .addCase(setLoadingHotel, (state, action) => {
      state.currentOfferLoaded = false;
    })
    .addCase(fetchNearHotels, (state, action) => {
      state.nearHotels = action.payload;
      state.nearOffersLoaded = true;
    })
    .addCase(setLoadingNearHotels, (state, action) => {
      state.nearOffersLoaded = false;
    })
    .addCase(fetchComments, (state,action) => {
      state.comments = action.payload;
      state.commentsLoaded = true;
    })
    .addCase(setLoadingComments, (state, action) => {
      state.commentsLoaded = false;
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
