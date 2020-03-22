import React from 'react';
import styles from "../../styles/general";

const LocationMapPage = () => {
  const classes = styles();

  //TODO Add map

  return (
    <div className={`${classes.fullScreenSize} ${classes.flexColumn}`}>
      <iframe className={classes.fullFlex} title="openstreetmap" scrolling="no" src="https://www.openstreetmap.org/export/embed.html?bbox=6.936922073364259%2C51.221776328824035%2C7.04601287841797%2C51.26980947466761&amp;layer=mapnik"></iframe>
    </div>
  )
};

export default LocationMapPage;
