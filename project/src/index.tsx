import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {favorites} from './mocks/favorites';
import {Provider} from 'react-redux';
import {store} from './store';

const Settings = {
  offers,
  favorites,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={Settings.offers}
        favorites={Settings.favorites}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
