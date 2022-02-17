import PlaceCard from '../components/place-card/place-card';
import {Link} from 'react-router-dom';

function Favorites(): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to="/">
                    <span>Amsterdam</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                <PlaceCard />
                <PlaceCard />
              </div>
            </li>

            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to="/">
                    <span>Cologne</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                <PlaceCard />
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorites;
