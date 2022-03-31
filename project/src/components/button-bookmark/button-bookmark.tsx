import {AppRoutes, AuthorizationStatus} from '../../const';
import {changeFavoriteAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks/store';
import {useNavigate} from 'react-router-dom';

type ButtonBookmarkProps = {
  offerId: number,
  isFavorite: boolean;
  prefix: string;
  width: number;
  height: number;
}

function ButtonBookmark({offerId, isFavorite, prefix, width, height}: ButtonBookmarkProps): JSX.Element {
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function onFavoriteChange() {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoutes.Login);
      return;
    }

    dispatch(changeFavoriteAction({hotelId: offerId, status: isFavorite ? 0 : 1}));
  }

  return (
    <button
      className={`${prefix}__bookmark-button ${isFavorite ?  `${prefix  }__bookmark-button--active` : ''} button`}
      type="button"
      onClick={onFavoriteChange}
    >
      <svg className={`${prefix}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default ButtonBookmark;
