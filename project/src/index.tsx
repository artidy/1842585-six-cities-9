import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  placeCount: 350,
};

ReactDOM.render(
  <React.StrictMode>
    <App placeCount={Settings.placeCount} />
  </React.StrictMode>,
  document.getElementById('root'));
