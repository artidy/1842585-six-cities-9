import PrivateRouteProps from '../../types/private-route-props';
import {Navigate} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks/store';

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state);

  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoutes.Login} />;
}

export default PrivateRoute;
