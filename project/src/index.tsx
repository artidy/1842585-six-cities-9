import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {favorites} from './mocks/favorites';

const Settings = {
  placeCount: 350,
  offers,
  favorites,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placeCount={Settings.placeCount}
      offers={Settings.offers}
      favorites={Settings.favorites}
    />
  </React.StrictMode>,
  document.getElementById('root'));
