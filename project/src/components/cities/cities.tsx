import {CITIES, DEFAULT_CITY} from '../../const';
import City from '../../types/city';
import {changeCity} from '../../store/actions';
import {MouseEvent} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/store';

function Cities(): JSX.Element {
  const {city: currentCity} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  function getCurrentCity(name: string): City {
    return CITIES.find((city) => city.name === name) || DEFAULT_CITY;
  }

  function changeCurrentCity(name: string) {
    return function (evt: MouseEvent<HTMLAnchorElement>) {
      evt.preventDefault();

      dispatch(changeCity(getCurrentCity(name)));
    };
  }

  return (
    <ul className="locations__list tabs__list">
      {
        CITIES.map((city: City) => (
          <li key={city.name} className="locations__item">
            <a
              className={`locations__item-link tabs__item ${city.name === currentCity.name ? 'tabs__item--active': ''}`}
              onClick={changeCurrentCity(city.name)}
              href="/"
            >
              <span>{city.name}</span>
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export default Cities;
