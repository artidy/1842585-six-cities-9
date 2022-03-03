import {MouseEvent, useEffect, useState} from 'react';

import City from '../types/city';
import Hotel from '../types/hotel';
import Map from '../components/map/map';
import PlaceCard from '../components/place-card/place-card';
import Location from '../types/location';
import {DEFAULT_CITY} from '../const';

type MainProps = {
  placeCount: number;
  offers: Hotel[];
};

function Main({placeCount, offers}: MainProps): JSX.Element {
  const [currentCity, setCurrentCity] = useState<City>(DEFAULT_CITY);
  const [points, setPoints] = useState<Location[]>(getCurrentPoints());
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    setPoints(getCurrentPoints());
  }, [currentCity]);

  useEffect(() => {
    setCities(getCities());
  }, [offers]);

  function getCurrentPoints(): Location[] {
    const locations: Location[] = [];

    offers.forEach(({city, location}: Hotel) => {
      if (currentCity.name === city.name) {
        locations.push(location);
      }
    });

    return locations;
  }

  function getCurrentCity(name: string): City {
    return offers.find(({city}) => city.name === name)?.city ?? DEFAULT_CITY;
  }

  function changeCurrentCity(name: string) {
    return function (evt: MouseEvent<HTMLAnchorElement>) {
      evt.preventDefault();

      setCurrentCity(getCurrentCity(name));
    };
  }

  function getCities(): City[] {
    const values: City[] = [];

    offers.forEach(({city}) => {
      if (!values.find((value) => value.name === city.name)) {
        values.push(city);
      }
    });

    return values;
  }

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              cities.map((city: City) => (
                <li key={city.location.latitude + city.location.longitude} className="locations__item">
                  <a
                    className={`locations__item-link tabs__item ${city.name === currentCity.name ? 'tabs__item--active': ''}`}
                    onClick={changeCurrentCity(city.name)}
                  >
                    <span>{city.name}</span>
                  </a>
                </li>
              ))
            }
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placeCount} places to stay in Amsterdam</b>
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
            <div className="cities__places-list places__list tabs__content">
              {offers.map((offer: Hotel) => (
                <PlaceCard key={offer.id} offer={offer} />
              ))}
            </div>
          </section>
          <div className="cities__right-section">
            <Map city={currentCity} locations={points} selectedPoint={undefined} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
