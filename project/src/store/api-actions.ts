import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import Hotel from '../types/hotel';
import {APIRoute} from '../const';
import {fetchHotels} from './actions';
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

export {fetchHotelsAction};
