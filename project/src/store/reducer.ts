import {createReducer} from '@reduxjs/toolkit';
import {DEFAULT_CITY} from '../const';

const initialState = {
  city: DEFAULT_CITY,
}

const reducer = createReducer(initialState, (builder) => builder);

export {reducer};
