import {useEffect} from 'react';

import Hotel from '../types/hotel';
import Map from '../components/map/map';
import Places from '../components/places/places';
import Cities from '../components/cities/cities';
import {useAppDispatch, useAppSelector} from '../hooks/store';
import {loadOffers} from '../store/actions';
import {getCityOffers} from '../functions';

type MainProps = {
  offers: Hotel[];
}

function Main({offers}: MainProps): JSX.Element {
  const {cityOffers, city} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadOffers(getCityOffers(offers, city.name)));
  }, [city, offers, dispatch]);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <Cities />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{cityOffers.length} places to stay in {city.name}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <Places className="cities__places-list places__list tabs__content" offers={cityOffers} />
          </section>
          <div className="cities__right-section">
            <Map className="cities__map map"/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
