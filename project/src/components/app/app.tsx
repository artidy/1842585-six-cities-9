import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {AppRoutes} from '../../const';
import Favorite from '../../types/favorite';
import Favorites from '../../pages/favorites';
import Hotel from '../../types/hotel';
import Layout from '../layout/layout';
import Login from '../../pages/login';
import Main from '../../pages/main';
import NotFound from '../../pages/not-found';
import Offer from '../../pages/offer';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  placeCount: number;
  offers: Hotel[];
  favorites: Favorite[];
}

function App({placeCount, offers, favorites}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Main}
          element={<Layout />}
        >
          <Route
            index
            element={<Main placeCount={placeCount} offers={offers} />}
          />
          <Route
            path={AppRoutes.Login}
            element={<Login />}
          />
          <Route
            path={AppRoutes.Favorites}
            element={
              <PrivateRoute>
                <Favorites favorites={favorites} />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoutes.Offer}/:id`}
            element={<Offer offers={offers} />}
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
