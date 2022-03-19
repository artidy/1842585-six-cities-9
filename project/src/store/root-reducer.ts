import {combineReducers} from '@reduxjs/toolkit';

import {favoritesSlice} from './favorites-slice/favorites-slice';
import {mainSlice} from './main-slice/main-slice';
import {NameSpace} from '../const';
import {offerSlice} from './offer-slice/offer-slice';
import {userSlice} from './user-slice/user-slice';

const rootReducer = combineReducers({
  [NameSpace.Main]: mainSlice.reducer,
  [NameSpace.Offer]: offerSlice.reducer,
  [NameSpace.Favorites]: favoritesSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});

export default rootReducer;
