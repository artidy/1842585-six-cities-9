import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import Hotel from '../types/hotel';
import {APIRoute, AuthorizationStatus} from '../const';
import {authorization, requireAuthorization} from './user-slice/user-slice';
import {changeFavorite, fetchHotels} from './main-slice/main-slice';
import {
  fetchComments,
  fetchCurrentHotel,
  fetchNearHotels,
  setLoadingComments,
  setLoadingHotel,
  setLoadingNearHotels
} from './offer-slice/offer-slice';
import {errorHandle} from '../services/error-handle';
import {convertComments, convertFavorite, convertHotel, convertHotels, setAuthorization} from '../functions';
import {UserApi} from '../types/user';
import Auth from '../types/auth';
import {dropToken} from '../services/token';
import UserComment from '../types/user-comment';
import {AddComment} from '../types/api-comment';
import FavoriteAction from '../types/favorite-action';
import {fetchFavorites} from './favorites-slice/favorites-slice';

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

const fetchCurrentHotelAction = createAsyncThunk(
  'data/hotels',
  async (hotelId: string) => {
    try {
      store.dispatch(setLoadingHotel(false));
      const {data} = await api.get<Hotel>(`${APIRoute.Hotels}/${hotelId}`);
      store.dispatch(fetchCurrentHotel(convertHotel(data)));
    } catch (error) {
      store.dispatch(setLoadingHotel(true));
      errorHandle(error);
    }
  },
);

const fetchNearHotelsAction = createAsyncThunk(
  'data/hotels',
  async (hotelId: string) => {
    try {
      store.dispatch(setLoadingNearHotels(false));
      const {data} = await api.get<Hotel[]>(`${APIRoute.Hotels}/${hotelId}/nearby`);
      store.dispatch(fetchNearHotels(convertHotels(data)));
    } catch (error) {
      store.dispatch(setLoadingNearHotels(true));
      errorHandle(error);
    }
  },
);

const fetchCommentsAction = createAsyncThunk(
  'data/comments',
  async (hotelId: string) => {
    try {
      store.dispatch(setLoadingComments(false));
      const {data} = await api.get<UserComment[]>(`${APIRoute.Comments}/${hotelId}`);
      store.dispatch(fetchComments(convertComments(data)));
    } catch (error) {
      store.dispatch(setLoadingComments(true));
      errorHandle(error);
    }
  },
);

const addCommentAction = createAsyncThunk(
  'data/addComment',
  async ({userComment, hotelId, resetForm}: AddComment) => {
    try {
      store.dispatch(setLoadingComments(false));
      const {data} = await api.post<UserComment[]>(`${APIRoute.Comments}/${hotelId}`, userComment);
      store.dispatch(fetchComments(convertComments(data)));
      resetForm();
    } catch (error) {
      store.dispatch(setLoadingComments(true));
      errorHandle(error);
    }
  },
);

const fetchFavoriteAction = createAsyncThunk(
  'data/fetchFavorite',
  async () => {
    try {
      const {data} = await api.get<Hotel[]>(APIRoute.Favorite);
      store.dispatch(fetchFavorites(convertFavorite(data)));
    } catch (error) {
      errorHandle(error);
    }
  },
);

const changeFavoriteAction = createAsyncThunk(
  'data/changeFavorite',
  async ({hotelId, status}: FavoriteAction) => {
    try {
      const {data} = await api.post<Hotel>(`${APIRoute.Favorite}/${hotelId}/${status}`);
      store.dispatch(changeFavorite(convertHotel(data)));
    } catch (error) {
      errorHandle(error);
    }
  },
);

const checkUserAuth = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      const {data} = await api.get<UserApi>(APIRoute.Login);
      setAuthorization(data);
    } catch (error) {
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

const login = createAsyncThunk(
  'user/login',
  async (auth: Auth) => {
    try {
      const {data} = await api.post<UserApi>(APIRoute.Login, auth);
      setAuthorization(data);
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

const logout = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      store.dispatch(authorization(null));
      dropToken();
    } catch (error) {
      errorHandle(error);
    }
  },
);

export {
  fetchHotelsAction,
  fetchCurrentHotelAction,
  fetchNearHotelsAction,
  fetchCommentsAction,
  addCommentAction,
  fetchFavoriteAction,
  changeFavoriteAction,
  checkUserAuth,
  login,
  logout
};
