import {useEffect} from 'react';

import Cities from '../components/cities/cities';
import {useAppDispatch, useAppSelector} from '../hooks/store';
import {loadOffers} from '../store/main-slice/main-slice';
import {getCityOffers} from '../functions';
import EmptyMainContainer from '../components/empty-main-container/empty-main-container';
import MainContainer from '../components/main-container/main-container';

function Main(): JSX.Element {
  const {cityOffers, city, sortingType, offers} = useAppSelector(({MAIN}) => MAIN);
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
        {cityOffers.length === 0 ?
          <EmptyMainContainer cityName={city.name} /> :
          <MainContainer cityName={city.name} cityOffers={cityOffers} />}
      </div>
    </main>
  );
}

export default Main;
