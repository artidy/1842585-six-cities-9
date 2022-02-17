import {BrowserRouter, Route, Routes} from 'react-router-dom';

import MainProps from '../../types/main-props';
import {AppRoutes} from '../../const';
import Main from '../../pages/main';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import Offer from '../../pages/offer';
import NotFound from '../../pages/not-found';

function App({placeCount}: MainProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Main}
          element={<Main placeCount={placeCount} />}
        />
        <Route
          path={AppRoutes.Login}
          element={<Login />}
        />
        <Route
          path={AppRoutes.Favorites}
          element={<Favorites />}
        />
        <Route
          path={`${AppRoutes.Offer}/:id`}
          element={<Offer />}
        />
        <Route
          path={AppRoutes.NotFound}
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
