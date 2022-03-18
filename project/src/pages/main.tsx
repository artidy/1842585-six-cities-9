import {useEffect} from 'react';

import Cities from '../components/cities/cities';
import Map from '../components/map/map';
import Places from '../components/places/places';
import Sorting from '../components/sorting/sorting';
import {useAppDispatch, useAppSelector} from '../hooks/store';
import {loadOffers} from '../store/actions';
import {getCityOffers} from '../functions';

function Main(): JSX.Element {
  const {cityOffers, city, sortingType, offers} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadOffers(getCityOffers(offers, city.name, sortingType)));
  }, [city, offers, sortingType, dispatch]);

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
            <Sorting />
            <Places className="cities__places-list places__list tabs__content" offers={cityOffers} />
          </section>
          <div className="cities__right-section">
            <Map className="cities__map map" offers={offers} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
