import Hotel from './types/hotel';
import Location from './types/location';

function getCityOffers(offers: Hotel[], cityName: string): Hotel[] {
  return offers.filter(({city: cityOffer}: Hotel) => cityName === cityOffer.name);
}

function getCurrentPoints(cityOffers: Hotel[]): Location[] {
  const locations: Location[] = [];

  cityOffers.forEach(({location}: Hotel) => {
    locations.push(location);
  });

  return locations;
}

export {getCityOffers, getCurrentPoints};
