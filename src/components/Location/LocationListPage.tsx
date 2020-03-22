import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import { API_LOCATIONS_PATH } from "../../routes";
import { FarmLocation } from "../../global";
import { Container } from "@material-ui/core";
import Copyright from "../Copyright/Copyright";
import Box from "@material-ui/core/Box";

const LocationListPage = () => {
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
        .then(data => setLoading(false))
        .catch(setError);
    })();
  }, []);

  if (error) {
    return <div>Error!</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  const cards = locations.map((loc: FarmLocation) => (
    <LocationCard
      locationName={loc.name}
      whatToDoSubline={loc.whatToDoSubline}
      usersRegistered={loc.usersRegistered}
      usersNeeded={loc.usersNeeded}
      distance={loc.distance}
      salary={loc.salary}
      imageUrl={loc.imageUrl}
      key={loc.id}
    />
  ));
  return (
    <Container>
      {cards}
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default LocationListPage;
