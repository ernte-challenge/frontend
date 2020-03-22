import React from 'react';
import generalStyles from "../../styles/general";
import styles from '../../styles/user';
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const RegisterPage = () => {
  const generalClasses = generalStyles();
  const classes = styles();

  // TODO : style form
  // TODO : Add POST on submit
  // TODO : Validation

  return (
    <div className={generalClasses.fullScreenSize}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="stretch"
        justify="center"
        className={classes.registerGrid}
      >
        <form noValidate autoComplete="off" >
          <TextField id="firstName" label="Vorname" />
          <TextField id="lastName" label="Nachname" />
          <TextField id="mail" label="E-Mail" />
          <TextField id="password" label="Passwort" />
          <TextField id="password2" label="Passwort wiederholen" />
        </form>
        <Button variant="contained" color="primary" href="/" className={classes.registerButton}>Registrieren</Button>
      </Grid>
    </div>
  )
};

export default RegisterPage;
