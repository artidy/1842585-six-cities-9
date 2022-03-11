import {Link} from 'react-router-dom';

import Favorite from '../types/favorite';
import Hotel from '../types/hotel';
import PlaceCard from '../components/place-card/place-card';
import {useAppSelector} from '../hooks/store';

function Favorites(): JSX.Element {
  const {favorite} = useAppSelector((state) => state);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {favorite.map(({id, city, offers}: Favorite) => (
              <li key={id} className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to="/">
                      <span>{city}</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map((offer: Hotel) =>(
                    <PlaceCard key={offer.id} offer={offer} />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorites;
