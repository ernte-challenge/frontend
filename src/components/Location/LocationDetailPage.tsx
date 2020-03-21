import React, {useEffect, useState} from 'react';
import {API_MARKETS_PATH} from "../../routes";
import LocationCard from "./LocationCard";

interface LocationDetailPage {
  locationId: string
};

interface Location {
  name: string,
  usersRegistered: number,
  usersNeeded: number,
  distance: number,
  salary: number,
  imageUrl: string
};

const LocationDetailPage = ({locationId}: LocationDetailPage) => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [locations, setLocations] = useState<Array<Location>>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(false);
      await fetch(API_MARKETS_PATH, {
        credentials: 'same-origin',
      })
        .then(response => response.json())
        .then(setLocations)
        .catch(setError);
    })();
  }, []);

  if (error) {
    return <div>Error!</div>
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    locations.map((loc) => (
      <LocationCard locationName={loc.name} usersRegistered={loc.usersRegistered}
                    usersNeeded={loc.usersNeeded} distance={loc.distance}
                    salary={loc.salary} imageUrl={loc.imageUrl}/>))
  );
};

export default LocationDetailPage;