import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {AppRoutes} from '../../const';
import Favorites from '../../pages/favorites';
import Layout from '../layout/layout';
import Login from '../../pages/login';
import Main from '../../pages/main';
import NotFound from '../../pages/not-found';
import Offer from '../../pages/offer';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Main}
          element={<Layout />}
        >
          <Route
            index
            element={<Main />}
          />
          <Route
            path={AppRoutes.Login}
            element={<Login />}
          />
          <Route
            path={AppRoutes.Favorites}
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoutes.Offer}/:id`}
            element={<Offer />}
          />
        </Route>
        <Route
          path={AppRoutes.NotFound}
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
