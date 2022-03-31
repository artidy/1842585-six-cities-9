import {Link} from 'react-router-dom';
import Hotel from '../../types/hotel';
import {useAppDispatch} from '../../hooks/store';
import {changeSelectedPoint} from '../../store/main-slice/main-slice';
import {DEFAULT_SELECTED_POINT, FavoritePreviewMinSize} from '../../const';
import ButtonBookmark from '../button-bookmark/button-bookmark';

type PlaceCardProps = {
  offer: Hotel;
};

function PlaceCard({offer}: PlaceCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  function onMouseEnterCard() {
    dispatch(changeSelectedPoint(offer.location));
  }

  function onMouseLeaveCard() {
    dispatch(changeSelectedPoint(DEFAULT_SELECTED_POINT));
  }

  return (
    <article className="cities__place-card place-card" onMouseEnter={onMouseEnterCard} onMouseLeave={onMouseLeaveCard}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place apartment" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ButtonBookmark
            offerId={offer.id}
            isFavorite={offer.isFavorite}
            prefix={'place-card'}
            width={FavoritePreviewMinSize.Width}
            height={FavoritePreviewMinSize.Height}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>Canal View Prinsengracht</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default PlaceCard;
