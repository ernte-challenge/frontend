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
import LocationDetailPage from "./LocationDetailPage";

const LocationDetailPageContainer = () => {
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
  return <LocationDetailPage location={location}/>
};

export default LocationDetailPageContainer;
