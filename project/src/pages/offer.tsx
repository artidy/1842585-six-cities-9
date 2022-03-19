import {Navigate, useParams} from 'react-router-dom';

import Map from '../components/map/map';
import Reviews from '../components/reviews/reviews';
import ReviewForm from '../components/review-form/review-form';
import {AppRoutes, AuthorizationStatus} from '../const';
import Places from '../components/places/places';
import {useAppDispatch, useAppSelector} from '../hooks/store';
import {fetchCommentsAction, fetchCurrentHotelAction, fetchNearHotelsAction} from '../store/api-actions';
import Loader from '../components/loader/loader';
import {getRatingWidth} from '../functions';
import {useEffect} from 'react';

function Offer(): JSX.Element {
  const {id} = useParams();
  const hotelId = id || '';
  const {
    currentOffer,
    nearHotels,
    comments,
    currentOfferLoaded,
    nearOffersLoaded,
  } = useAppSelector(({OFFER}) => OFFER);
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrentHotelAction(hotelId));
    dispatch(fetchNearHotelsAction(hotelId));
    dispatch(fetchCommentsAction(hotelId));
  }, [hotelId, dispatch]);

  if (!currentOfferLoaded ||
    !nearOffersLoaded) {
    return <Loader />;
  }

  if (currentOffer === null) {
    return <Navigate to={AppRoutes.NotFound} />;
  }

  const {
    images,
    title,
    rating,
    type,
    maxAdults,
    bedrooms,
    price,
    goods,
    isPremium,
    description,
    host: {
      avatarUrl,
      isPro,
      name,
    },
  } = currentOffer;
  const ratingWidth = getRatingWidth(rating);

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.map((path) => (
              <div key={path} className="property__image-wrapper">
                <img className="property__image" src={path} alt="studio" />
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium ?
              <div className="property__mark">
                <span>Premium</span>
              </div> : null}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: `${ratingWidth}%` }} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {goods.map((good) => (
                  <li key={good} className="property__inside-item">
                    {good}
                  </li>
                ))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">{name}</span>
                {isPro ? <span className="property__user-status">Pro</span> : null}
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
              <Reviews comments={comments} />
              {authorizationStatus === AuthorizationStatus.Auth ? <ReviewForm hotelId={+hotelId} /> : null}
            </section>
          </div>
        </div>
        <Map className="property__map map" offers={nearHotels} />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <Places className="near-places__list places__list" offers={nearHotels} />
        </section>
      </div>
    </main>
  );
}

export default Offer;
