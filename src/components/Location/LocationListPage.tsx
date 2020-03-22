import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import { API_LOCATIONS_PATH } from "../../routes";
import { FarmLocation } from "../../global";
import { Container } from "@material-ui/core";
import Copyright from "../Copyright/Copyright";
import Box from "@material-ui/core/Box";
<<<<<<< HEAD
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

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
    return <CircularProgress disableShrink />;
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
<<<<<<< HEAD
    <Grid container justify={"center"} alignItems={"center"} direction={"column"}>
        {cards}
        <Box mt={8}>
          <Copyright/>
        </Box>
    </Grid>
  )
=======
    <Container>
      {cards}
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
>>>>>>> location-detail-page
};

export default LocationListPage;
