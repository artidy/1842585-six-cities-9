import Hotel from './types/hotel';
import Location from './types/location';
import {AuthorizationStatus, SortingType} from './const';

function getCityOffers(offers: Hotel[], cityName: string, sortingType: string = SortingType.Popular): Hotel[] {
  const result = offers.filter(({city: cityOffer}: Hotel) => cityName === cityOffer.name);

  switch(sortingType) {
    case SortingType.PriceHigh:
      result.sort((offer1, offer2) => offer2.price - offer1.price);
      break;
    case SortingType.PriceLow:
      result.sort((offer1, offer2) => offer1.price - offer2.price);
      break;
    case SortingType.TopRated:
      result.sort((offer1, offer2) => offer2.rating - offer1.rating);
      break;
  }

  return result;
}

function getCurrentPoints(cityOffers: Hotel[]): Location[] {
  const locations: Location[] = [];

  cityOffers.forEach(({location}: Hotel) => {
    locations.push(location);
  });

  return locations;
}

function convertHotel(
  {
    bedrooms,
    city,
    description,
    goods,
    host: {
      avatarUrl,
      id: hostId,
      isPro,
      name,
    },
    id,
    images,
    isFavorite,
    isPremium,
    location,
    maxAdults,
    previewImage,
    price,
    rating,
    title,
    type,
  }: Hotel): Hotel {
  return {
    bedrooms,
    city,
    description,
    goods,
    host: {
      avatarUrl,
      id: hostId,
      isPro,
      name,
    },
    id,
    images,
    isFavorite,
    isPremium,
    location,
    maxAdults,
    previewImage,
    price,
    rating,
    title,
    type,
  };
}

function convertHotels(hotels: Hotel[]): Hotel[] {
  return hotels.map((hotel: Hotel) => convertHotel(hotel));
}

function isCheckedAuth(authorizationStatus: AuthorizationStatus): boolean {
  return authorizationStatus === AuthorizationStatus.Unknown;
}

export {getCityOffers, getCurrentPoints, convertHotel, convertHotels, isCheckedAuth};
