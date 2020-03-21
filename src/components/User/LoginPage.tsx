import React from 'react';
import styles from "../../styles";
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {API_LOGIN_PATH, REGISTER_PATH} from "../../routes";

const RegisterPage = () => {
  const classes = styles();

  // TODO : style form
  // TODO : Add POST on submit, href  does a GET instead of a POST

  return (
    <div className={classes.fullScreenSize}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="stretch"
        justify="center"
        style={{minHeight: '100vh'}}
      >
        <Button variant="contained" color="secondary" href={REGISTER_PATH} style={{margin: "1rem"}}>
          Zur Registrierung
        </Button>

        <form noValidate autoComplete="off">
          <TextField id="mail" label="E-Mail"/>
          <TextField id="password" label="Passwort"/>
        </form>

        <Button variant="contained" color="primary" href={API_LOGIN_PATH} style={{margin: "1rem"}}>Anmelden</Button>
      </Grid>
    </div>
  )
};

export default RegisterPage;