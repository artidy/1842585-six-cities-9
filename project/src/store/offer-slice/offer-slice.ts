import {createSlice} from '@reduxjs/toolkit';

import {NameSpace} from '../../const';
import CurrentHotel from '../../types/current-hotel';
import Hotel from '../../types/hotel';
import UserComment from '../../types/user-comment';

const INITIAL_OFFER: CurrentHotel = null as CurrentHotel;
const INITIAL_NEAR_OFFERS: Hotel[] = [];
const INITIAL_COMMENTS: UserComment[] = [];

const initialState = {
  currentOffer: INITIAL_OFFER,
  nearHotels: INITIAL_NEAR_OFFERS,
  comments: INITIAL_COMMENTS,
  currentOfferLoaded: false,
  nearOffersLoaded: false,
  commentsLoaded: false,
};

const offerSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    fetchCurrentHotel: (state, action) => {
      state.currentOffer = action.payload;
      state.currentOfferLoaded = true;
    },
    setLoadingHotel: (state, action) => {
      state.currentOfferLoaded = action.payload;
    },
    fetchNearHotels: (state, action) => {
      state.nearHotels = action.payload;
      state.nearOffersLoaded = true;
    },
    setLoadingNearHotels: (state, action) => {
      state.nearOffersLoaded = action.payload;
    },
    fetchComments: (state,action) => {
      state.comments = action.payload;
      state.commentsLoaded = true;
    },
    setLoadingComments: (state, action) => {
      state.commentsLoaded = action.payload;
    },
  },
});

const {
  fetchCurrentHotel,
  setLoadingHotel,
  fetchNearHotels,
  setLoadingNearHotels,
  fetchComments,
  setLoadingComments,
} = offerSlice.actions;

export {
  offerSlice,
  fetchCurrentHotel,
  setLoadingHotel,
  fetchNearHotels,
  setLoadingNearHotels,
  fetchComments,
  setLoadingComments
};
