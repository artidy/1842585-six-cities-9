import React from 'react';
import {ToastContainer} from 'react-toastify';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkUserAuth, fetchHotelsAction} from './store/api-actions';

import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchHotelsAction());
store.dispatch(checkUserAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
