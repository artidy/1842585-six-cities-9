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

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
const DEFAULT_ICON_SIZE: PointExpression = [40, 40];
const DEFAULT_ANCHOR_SIZE: PointExpression = [20, 40];
const DEFAULT_CITY = CITIES[0];
const DEFAULT_SELECTED_POINT: SelectedPoint = {
  latitude: 0,
  longitude: 0,
  zoom: 0,
};

export {AppRoutes, SortingType, CITIES, DEFAULT_ICON_SIZE, DEFAULT_ANCHOR_SIZE, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, DEFAULT_CITY, DEFAULT_SELECTED_POINT};
