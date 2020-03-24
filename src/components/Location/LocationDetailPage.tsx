import React, { useEffect, useState,  } from "react";
import { useParams } from 'react-router-dom';
import { FarmLocation } from "../../global";
import {
  Grid,
  Typography,
  Container,
  Avatar,
  Divider,
  Button
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import {API_LOCATIONS_PATH} from "../../routes";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const LocationDetailPage = () => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<FarmLocation | null>(null);
  const { locationId } = useParams();

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(false);
      await fetch(`${API_LOCATIONS_PATH}/${locationId}`, {
        credentials: "same-origin"
      })
        .then(response => response.json())
        .then(setLocation)
        .then(data => setLoading(false))
        .catch(setError);
    })();
  }, [locationId]);

  if (error) {
    return <div>Error!</div>;
  }
  if (loading || !location) {
    return <LoadingSpinner/>;
  }

  const {
    street,
    houseNumber,
    zipCode,
    city,
    locationPhoneNumber,
    payedPerHour,
    bannerImageSrc,
    bannerImageDescription,
    mainAreasOfActivity,
    searchedProfile,
    whatYouGet
  } = location;

  return (
    <Grid container style={{ backgroundColor: 'white', maxWidth: "480px", margin: "0 auto"  }}>
      <Grid>
        <img
          style={{ height: "220px", width: "100%", backgroundSize: "cover"}}
          className="bannerImage"
          src={bannerImageSrc}
          alt={bannerImageDescription}
        />
      </Grid>
      <Container style={{ marginBottom: "64px" }}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{ marginTop: "32px", marginBottom: "12px" }}
        >
          <Grid item>
            <Typography variant="body2">Telefon</Typography>
            <Typography style={{ color: "#84BEFF" }}>
              {locationPhoneNumber}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              aria-label="call-i"
              style={{ backgroundColor: "#EEEEEF" }}
              onClick={() => {
                console.log("CallIcon was clicked");
              }}
            >
              <PhoneIcon style={{ color: "#0175FF" }} />
            </Avatar>
          </Grid>
        </Grid>
        <Divider />
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{ marginTop: "32px", marginBottom: "12px" }}
        >
          <Grid item>
            <Typography variant="body2">Anschrift</Typography>
            <Typography variant="body1">
              {street} {houseNumber}
            </Typography>
            <Typography variant="body1">
              {zipCode} {city}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              aria-label="googleMaps"
              style={{
                backgroundColor: "#F9F5EC",
                color: "black",
                width: "80px",
                height: "80px",
                borderRadius: "2px"
              }}
              onClick={() => {
                console.log("googleMaps was clicked");
              }}
            >
              GMaps
            </Avatar>
          </Grid>
        </Grid>
        <Divider />

        <Grid
          container
          direction="row"
          style={{ marginTop: "32px", marginBottom: "12px" }}
        >
          <Grid item>
            <Typography variant="body1" style={{ fontWeight: 500 }}>
              Ihre Tätigkeitsschwerpunkte:
            </Typography>
          </Grid>
          <Grid item>
            <ul>
              {mainAreasOfActivity.map(text => {
                return (
                  <li key={`mainAreasOfActivity-${text.length}`}>{text}</li>
                );
              })}
            </ul>
          </Grid>
        </Grid>
        <Divider />

        <Grid
          container
          direction="row"
          style={{ marginTop: "32px", marginBottom: "12px" }}
        >
          <Grid item>
            <Typography variant="body1" style={{ fontWeight: 500 }}>
              Ihr Profil:
            </Typography>
          </Grid>
          <Grid item>
            <ul>
              {searchedProfile.map(text => {
                return <li key={`searchedProfile-${text.length}`}>{text}</li>;
              })}
            </ul>
          </Grid>
        </Grid>
        <Divider />

        <Grid
          container
          direction="row"
          style={{ marginTop: "32px", marginBottom: "12px" }}
        >
          <Grid item>
            <Typography variant="body1" style={{ fontWeight: 500 }}>
              Wir bieten ihnen:
            </Typography>
          </Grid>
          <Grid item>
            <ul>
              <li>{payedPerHour} €/ pro Stunde</li>
              {whatYouGet.map(text => {
                return <li key={`payedPerHour-${text.length}`}>{text}</li>;
              })}
            </ul>
          </Grid>
        </Grid>
        <Divider />
        <Button
          variant="contained"
          style={{
            width: "100%",
            backgroundColor: "#3F3E55",
            color: "white"
          }}
        >
          Bewerben
        </Button>
      </Container>
    </Grid>
  );
};

export default LocationDetailPage;
