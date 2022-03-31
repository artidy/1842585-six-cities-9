import Hotel from './types/hotel';
import Location from './types/location';
import {AuthorizationStatus, ONE_STAR_RATING_WIDTH, SortingType} from './const';
import {saveToken} from './services/token';
import {store} from './store';
import {authorization, requireAuthorization} from './store/user-slice/user-slice';
import {UserApi} from './types/user';
import UserComment from './types/user-comment';
import Favorite from './types/favorite';

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

function getRatingWidth(rating: number): number {
  return rating * ONE_STAR_RATING_WIDTH;
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

function convertComment(
  {
    comment,
    date,
    id,
    rating,
    user: {
      avatarUrl,
      id: userId,
      isPro,
      name,
    },
  }: UserComment): UserComment {
  return {
    comment,
    date,
    id,
    rating,
    user: {
      avatarUrl,
      id: userId,
      isPro,
      name,
    },
  };
}

function convertComments(comments: UserComment[]): UserComment[] {
  return comments.map((comment: UserComment) => convertComment(comment));
}

function convertFavorite(offers: Hotel[]): Favorite[] {
  const favorites = [] as Favorite[];

  offers.forEach((offer) => {
    const currentFavorite = favorites.find((favorite) => favorite.city === offer.city.name);

    if (currentFavorite === undefined) {
      favorites.push({city: offer.city.name, offers: [offer] as Hotel[]});
    } else {
      currentFavorite.offers.push(offer);
    }
  });

  return favorites;
}

function isCheckedAuth(authorizationStatus: AuthorizationStatus): boolean {
  return authorizationStatus === AuthorizationStatus.Unknown;
}

function setAuthorization(data: UserApi): void {
  saveToken(data.token);
  store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  store.dispatch(authorization(data));
}

export {
  getCityOffers,
  getCurrentPoints,
  convertHotel,
  convertHotels,
  convertComments,
  convertFavorite,
  isCheckedAuth,
  setAuthorization,
  getRatingWidth
};
