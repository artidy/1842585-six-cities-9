import {PointExpression} from 'leaflet';

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
const DEFAULT_ICON_SIZE: PointExpression = [40, 40];
const DEFAULT_ANCHOR_SIZE: PointExpression = [20, 40];
const DEFAULT_CITY = {
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 10,
  },
  name: 'Amsterdam',
};

enum AppRoutes {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '*'
}

export {AppRoutes, DEFAULT_ICON_SIZE, DEFAULT_ANCHOR_SIZE, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, DEFAULT_CITY};
