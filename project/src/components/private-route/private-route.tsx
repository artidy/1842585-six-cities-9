import PrivateRouteProps from '../../types/private-route-props';
import {Navigate} from 'react-router-dom';
import {AppRoutes} from '../../const';

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const hasAccess = false;

  return hasAccess ? children : <Navigate to={AppRoutes.Login} />;
}

export default PrivateRoute;
