import React from 'react';
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {LOCATIONS_MAP_PATH, REGISTER_PATH} from "../../routes";
import UserContext from "../../context/UserContext";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const WelcomePage = () => {
  const firstName = (
    <UserContext.Consumer>
      {user => <span>{user.firstName}</span>}
    </UserContext.Consumer>
  );

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
              {firstName && <span>Hallo, {firstName}!</span>}
            </Typography>
          </Box>
          <Grid container direction="column" alignContent="center">
            <Button variant="contained" color="primary" href={LOCATIONS_MAP_PATH} style={{margin: "1rem", width: "70%"}}>Stöbern</Button>
            <Button variant="contained" color="primary" href={REGISTER_PATH} style={{margin: "1rem", width: "70%"}}>Profil anlegen</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
};

export default WelcomePage;
