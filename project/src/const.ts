import {PointExpression} from 'leaflet';
import City from './types/city';
import {SelectedPoint} from './types/state';

enum AppRoutes {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '*'
}

enum SortingType {
  Popular = 'Popular',
  PriceLow = 'Price: low to high',
  PriceHigh = 'Price: high to low',
  TopRated = 'Top rated first',
}

const CITIES: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
];

const AUTH_TOKEN_KEY_NAME = '8518442-six-cities';
const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_CURRENT = 'img/pin-active.svg';
const DEFAULT_ICON_SIZE: PointExpression = [40, 40];
const DEFAULT_ANCHOR_SIZE: PointExpression = [20, 40];
const DEFAULT_CITY = CITIES[0];
const DEFAULT_SELECTED_POINT: SelectedPoint = {
  latitude: 0,
  longitude: 0,
  zoom: 0,
};
const ONE_STAR_RATING_WIDTH = 20;

enum APIRoute {
  Hotels = '/hotels',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum NameSpace {
  User = 'USER',
  Main = 'MAIN',
  Offer = 'OFFER',
  Favorites = 'FAVORITES',
}

enum FavoritePreviewMinSize {
  Width = 18,
  Height = 19,
}

enum FavoritePreviewMaxSize {
  Width = 31,
  Height = 33,
}

export {
  AppRoutes,
  SortingType,
  CITIES,
  AUTH_TOKEN_KEY_NAME,
  DEFAULT_ICON_SIZE,
  DEFAULT_ANCHOR_SIZE,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  DEFAULT_CITY,
  DEFAULT_SELECTED_POINT,
  ONE_STAR_RATING_WIDTH,
  APIRoute,
  HTTP_CODE,
  AuthorizationStatus,
  NameSpace,
  FavoritePreviewMinSize,
  FavoritePreviewMaxSize
};
