import {createAction} from '@reduxjs/toolkit';
import City from '../types/city';
import Hotel from '../types/hotel';
import Favorite from '../types/favorite';
import {SelectedPoint} from '../types/state';

const changeCity = createAction<City>('changeCity');
const loadOffers = createAction<Hotel[]>('loadOffers');
const loadFavorites = createAction<Favorite[]>('loadFavorites');
const changeSelectedPoint = createAction<SelectedPoint>('changeSelectedPoint');
const changeSortingType = createAction<string>('changeSortingType');
const fetchHotels = createAction<Hotel[]>('data/fetchHotels');

export {changeCity, loadOffers, loadFavorites, changeSelectedPoint, changeSortingType, fetchHotels};
