import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import styles from "../../styles";

const LocationMapPage = () => {
  const classes = styles();

  //TODO Add map

  return (
    <div className={classes.fullScreenSize}>
      Hier ist bald eine Karte zu sehen
    </div>
  )
};

export default LocationMapPage;