import {Icon, Marker} from 'leaflet';
import {useEffect, useRef} from 'react';

import City from '../../types/city';
import Location from '../../types/location';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import useMap from '../../hooks/useMap';

import 'leaflet/dist/leaflet.css';

type MapProps = {
  locations: Location[];
  city: City;
  selectedPoint: Location | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({locations, city, selectedPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      locations.forEach((location: Location) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker.setIcon(
          selectedPoint !== undefined &&
          location.latitude === selectedPoint.latitude &&
          location.longitude === selectedPoint.longitude
            ? currentCustomIcon
            : defaultCustomIcon,
        ).addTo(map);
      });
    }
  }, [city, locations, selectedPoint]);

  return (
    <div
      ref={mapRef}
      className="cities__map map"
    >
    </div>
  );
}

export default Map;
