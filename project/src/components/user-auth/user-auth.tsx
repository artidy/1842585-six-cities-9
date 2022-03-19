import {useAppDispatch, useAppSelector} from '../../hooks/store';
import {AppRoutes, AuthorizationStatus} from '../../const';
import {Link} from 'react-router-dom';
import {logout} from '../../store/api-actions';

function UserAuth(): JSX.Element {
  const {authorizationStatus, user} = useAppSelector(({USER}) => USER);
  const dispatch = useAppDispatch();

  function onClickSignOut() {
    dispatch(logout());
  }

  return authorizationStatus === AuthorizationStatus.Auth ? (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{user?.name}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link" to={AppRoutes.Main} onClick={onClickSignOut}>
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default UserAuth;
