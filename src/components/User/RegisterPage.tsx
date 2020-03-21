import React from 'react';
import styles from "../../styles";
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const RegisterPage = () => {
  const classes = styles();

  // TODO : style form
  // TODO : Add POST on submit
  // TODO : Validation

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
        <form noValidate autoComplete="off" >
          <TextField id="firstName" label="Vorname" />
          <TextField id="lastName" label="Nachname" />
          <TextField id="mail" label="E-Mail" />
          <TextField id="password" label="Passwort" />
          <TextField id="password2" label="Passwort wiederholen" />
        </form>
        <Button variant="contained" color="primary" href="/" style={{margin: "1rem"}}>Registrieren</Button>
      </Grid>
    </div>
  )
};

export default RegisterPage;