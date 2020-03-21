import React from 'react';

interface LocationDetailPage {
  locationId: string
};

const LocationDetailPage = ({ locationId}: LocationDetailPage) => {
  // TODO: Fetches Location Details by ID

  return (
    <div>Location {locationId}</div>
  );
};

export default LocationDetailPage;