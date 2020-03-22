import React, { useEffect } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import styles from "../../styles/general";
import LocationCard from "./LocationCard";

const LocationListPage = () => {
  const classes = styles();

  // TODO: Fetch all locations by distance, introduce state here

  return (
    <div className={classes.fullScreenSize}>
      <LocationCard
        locationName={"someName"}
        whatToDoSubline={"Tracktor fahren"}
        salary={11.5}
        distance={200}
        usersNeeded={6}
        usersRegistered={4}
        imageUrl={"abc"}
        key={1}
      />
    </div>
  );
};

export default LocationListPage;
