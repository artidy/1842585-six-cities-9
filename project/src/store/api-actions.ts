import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import Hotel from '../types/hotel';
import {APIRoute} from '../const';
import {fetchFavorite, fetchHotels} from './actions';
import {errorHandle} from '../services/error-handle';
import Favorite from '../types/favorite';

const fetchHotelsAction = createAsyncThunk(
  'data/hotels',
  async () => {
    try {
      const {data} = await api.get<Hotel[]>(APIRoute.Hotels);
      store.dispatch(fetchHotels(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

const fetchFavoriteAction = createAsyncThunk(
  'data/favorite',
  async () => {
    try {
      const {data} = await api.get<Favorite[]>(APIRoute.Favorite);
      store.dispatch(fetchFavorite(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export {fetchHotelsAction, fetchFavoriteAction};
