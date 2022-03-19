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
  },
});

const {fetchHotels, changeCity, loadOffers, changeSelectedPoint, changeSortingType} = mainSlice.actions;

export {mainSlice, fetchHotels, changeCity, loadOffers, changeSelectedPoint, changeSortingType};
