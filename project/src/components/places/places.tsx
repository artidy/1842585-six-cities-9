import Hotel from '../../types/hotel';
import PlaceCard from '../place-card/place-card';

type PlacesProps = {
  className: string;
  offers: Hotel[];
}

function Places({className, offers}: PlacesProps): JSX.Element {
  return (
    <div className={className}>
      {offers.map((offer: Hotel) => (
        <PlaceCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export default Places;
