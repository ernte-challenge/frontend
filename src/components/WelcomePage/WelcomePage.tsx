import React, {useContext} from 'react';
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {LOCATIONS_MAP_PATH, USER_REGISTER_PATH} from "../../routes";
import UserContext, {UserContextProperties} from "../../context/UserContext";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const WelcomePage = () => {
  const { firstName }: UserContextProperties = useContext(UserContext);


  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        style={{height: '100vh'}}
      >
        <Grid container justify="center">
          <Box>
            <Typography component="h3" variant="h5">
              <span>Hallo, {firstName? firstName : 'Unbekannter'}!</span>
            </Typography>
          </Box>
          <Grid container direction="column" alignContent="center">
            <Button variant="contained" color="primary" href={LOCATIONS_MAP_PATH} style={{margin: "1rem", width: "70%"}}>Stöbern</Button>
            <Button variant="contained" color="primary" href={USER_REGISTER_PATH} style={{margin: "1rem", width: "70%"}}>Profil anlegen</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
};

export default WelcomePage;
