import React from 'react';
import {EDIT_PROFILE_PATH, LOGIN_PAGE_PATH} from "../../routes";
import {Redirect} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Copyright from "../Copyright/Copyright";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function FarmerProfilePage({loggedIn = true}) {
  const classes = useStyles();

  const userId = "SOME_USER_ID";

  if (!loggedIn) {
    return <Redirect to={LOGIN_PAGE_PATH}/>
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Dein Profil
        </Typography>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          href={EDIT_PROFILE_PATH}
        >Profil bearbeiten
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          href={LOGIN_PAGE_PATH}
        >Abmelden
        </Button>
      </div>
      <Box mt={8}>
        <Copyright/>
      </Box>
    </Container>
  );
}