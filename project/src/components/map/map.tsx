import {Icon, Marker} from 'leaflet';
import {useEffect, useRef} from 'react';

import Location from '../../types/location';
import {DEFAULT_ANCHOR_SIZE, DEFAULT_ICON_SIZE, URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import useMap from '../../hooks/useMap';

import 'leaflet/dist/leaflet.css';
import {useAppSelector} from '../../hooks/store';
import {getCurrentPoints} from '../../functions';
import Hotel from '../../types/hotel';

type MapProps = {
  className: string;
  offers: Hotel[];
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: DEFAULT_ICON_SIZE,
  iconAnchor: DEFAULT_ANCHOR_SIZE,
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: DEFAULT_ICON_SIZE,
  iconAnchor: DEFAULT_ANCHOR_SIZE,
});

function Map({className, offers}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const {city, selectedPoint} = useAppSelector((state) => state);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const points = getCurrentPoints(offers);

      points.forEach((location: Location) => {
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
  }, [map, city, offers, selectedPoint]);

  return (
    <section
      className={className}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
