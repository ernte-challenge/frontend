import React, {useEffect, useState} from "react";
import styles from "../../styles/general";
import LocationCard from "./LocationCard";
import {API_LOCATIONS_PATH} from "../../routes";
import {FarmLocation} from "../../global";

const LocationListPage = () => {
  const classes = styles();

  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [locations, setLocations] = useState<Array<FarmLocation>>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(false);
      await fetch(API_LOCATIONS_PATH, {
        credentials: "same-origin"
      })
        .then(response => response.json())
        .then(setLocations)
        .catch(setError);
    })();
  }, []);

  if (error) {
    return <div>Error!</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return locations.map((loc: FarmLocation) => (
    <LocationCard
      locationName={loc.name}
      whatToDoSubline={loc.whatToDoSubline}
      usersRegistered={loc.usersRegistered}
      usersNeeded={loc.usersNeeded}
      distance={loc.distance}
      salary={loc.salary}
      imageUrl={loc.imageUrl}
    />
  ));
};

export default LocationListPage;
