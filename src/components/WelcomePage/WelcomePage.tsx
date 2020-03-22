import React from 'react';
import styles from "../../styles/general";
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {LOCATIONS_MAP_PATH, REGISTER_PATH} from "../../routes";

const WelcomePage = () => {
  const classes = styles();

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{minHeight: '100vh'}}
      >
        <Button variant="contained" color="primary" href={LOCATIONS_MAP_PATH} style={{margin: "1rem"}}>Stöbern</Button>
        <Button variant="contained" color="primary" href={REGISTER_PATH} style={{margin: "1rem"}}>Profil anlegen</Button>
      </Grid>
    </div>
  )
};

export default WelcomePage;
