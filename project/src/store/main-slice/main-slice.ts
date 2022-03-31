import {createSlice} from '@reduxjs/toolkit';

import {DEFAULT_CITY, DEFAULT_SELECTED_POINT, NameSpace, SortingType} from '../../const';
import Hotel from '../../types/hotel';

const INITIAL_OFFERS: Hotel[] = [];

const initialState = {
  city: DEFAULT_CITY,
  cityOffers: INITIAL_OFFERS,
  selectedPoint: DEFAULT_SELECTED_POINT,
  sortingType: SortingType.Popular.toString(),
  offers: INITIAL_OFFERS,
  offersLoaded: false,
};

const mainSlice = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    fetchHotels: (state, action) => {
      state.offers = action.payload;
      state.offersLoaded = true;
    },
    changeCity: (state, action) => {
      state.city = action.payload;
    },
    loadOffers: (state, action) => {
      state.cityOffers = action.payload;
    },
    changeSelectedPoint: (state, action) => {
      state.selectedPoint = action.payload;
    },
    changeSortingType: (state, action) => {
      state.sortingType = action.payload;
    },
    changeFavorite: (state, action) => {
      const idxOffer = state.offers.findIndex((offer) => offer.id === action.payload.id);
      state.offers = [...state.offers.slice(0, idxOffer), action.payload, ...state.offers.slice(idxOffer + 1)];
    },
  },
});

const {fetchHotels, changeCity, loadOffers, changeSelectedPoint, changeSortingType, changeFavorite} = mainSlice.actions;

export {mainSlice, fetchHotels, changeCity, loadOffers, changeSelectedPoint, changeSortingType, changeFavorite};
