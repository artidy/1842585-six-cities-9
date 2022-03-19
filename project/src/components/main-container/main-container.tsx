import Map from '../map/map';
import Places from '../places/places';
import Sorting from '../sorting/sorting';
import Hotel from '../../types/hotel';

type mainContainerProps = {
  cityName: string;
  cityOffers: Hotel[];
}

function MainContainer({cityName, cityOffers}: mainContainerProps): JSX.Element {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{cityOffers.length} places to stay in {cityName}</b>
        <Sorting />
        <Places className="cities__places-list places__list tabs__content" offers={cityOffers} />
      </section>
      <div className="cities__right-section">
        <Map className="cities__map map" offers={cityOffers} />
      </div>
    </div>
  );
}

export default MainContainer;
