import {useRef} from 'react';

function Map() {
  const mapRef = useRef(null);

  return (
    <div
      ref={mapRef}
      className="cities__map map"
    >
    </div>
  );
}

export default Map;
