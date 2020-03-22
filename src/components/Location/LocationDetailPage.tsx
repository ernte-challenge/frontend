import React, { useEffect, useState } from "react";
import { API_LOCATIONS_PATH } from "../../routes";
import LocationCard from "./LocationCard";
import {FarmLocation} from "../../global";

interface LocationDetailPage {
  locationId: string;
}

const LocationDetailPage = ({ locationId }: LocationDetailPage) => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<FarmLocation | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(false);
      await fetch(`${API_LOCATIONS_PATH}/${locationId}`, {
        credentials: "same-origin"
      })
        .then(response => response.json())
        .then(setLocation)
        .catch(setError);
    })();
  }, [locationId]);

  if (error) {
    return <div>Error!</div>;
  }
  if (loading || !location) {
    return <div>Loading...</div>;
  }
  return (
    <LocationCard
      locationName={location.name}
      whatToDoSubline={location.whatToDoSubline}
      usersRegistered={location.usersRegistered}
      usersNeeded={location.usersNeeded}
      distance={location.distance}
      salary={location.salary}
      imageUrl={location.imageUrl}
    />
  );
};

export default LocationDetailPage;
