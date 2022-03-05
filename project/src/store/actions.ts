import {createAction} from '@reduxjs/toolkit';
import City from '../types/city';
import Hotel from '../types/hotel';
import Favorite from '../types/favorite';

const changeCity = createAction<City>('changeCity');
const loadOffers = createAction<Hotel[]>('loadOffers');
const loadFavorites = createAction<Favorite[]>('loadFavorites');

export {changeCity, loadOffers, loadFavorites};
