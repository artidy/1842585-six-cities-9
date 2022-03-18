import {createAction} from '@reduxjs/toolkit';

import {AuthorizationStatus} from '../const';
import City from '../types/city';
import Hotel from '../types/hotel';
import Favorite from '../types/favorite';
import {SelectedPoint} from '../types/state';
import {User} from '../types/user';
import CurrentHotel from '../types/current-hotel';
import UserComment from '../types/user-comment';

const changeCity = createAction<City>('changeCity');
const loadOffers = createAction<Hotel[]>('loadOffers');
const loadFavorites = createAction<Favorite[]>('loadFavorites');
const changeSelectedPoint = createAction<SelectedPoint>('changeSelectedPoint');
const changeSortingType = createAction<string>('changeSortingType');
const fetchHotels = createAction<Hotel[]>('data/fetchHotels');
const fetchCurrentHotel = createAction<CurrentHotel>('data/fetchCurrentHotel');
const fetchNearHotels = createAction<Hotel[]>('data/fetchNearHotels');
const fetchComments = createAction<UserComment[]>('data/fetchComments');
const setLoadingHotel = createAction<boolean>('data/changeLoadingHotel');
const setLoadingNearHotels = createAction<boolean>('data/changeLoadingNearHotels');
const setLoadingComments = createAction<boolean>('data/changeLoadingComments');
const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
const authorization = createAction<User>('user/authorization');

export {
  changeCity,
  loadOffers,
  loadFavorites,
  changeSelectedPoint,
  changeSortingType,
  fetchHotels,
  fetchCurrentHotel,
  requireAuthorization,
  authorization,
  setLoadingHotel,
  fetchNearHotels,
  fetchComments,
  setLoadingNearHotels,
  setLoadingComments
};
