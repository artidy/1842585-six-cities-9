import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import Hotel from '../types/hotel';
import {APIRoute, AuthorizationStatus} from '../const';
import {fetchHotels, requireAuthorization} from './actions';
import {errorHandle} from '../services/error-handle';
import {convertHotels} from '../functions';

const fetchHotelsAction = createAsyncThunk(
  'data/hotels',
  async () => {
    try {
      const {data} = await api.get<Hotel[]>(APIRoute.Hotels);
      store.dispatch(fetchHotels(convertHotels(data)));
    } catch (error) {
      errorHandle(error);
    }
  },
);

const checkUserAuth = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export {fetchHotelsAction, checkUserAuth};
