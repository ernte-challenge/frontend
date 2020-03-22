import React from 'react';
import {LOGIN_PAGE_PATH} from "../../routes";
import {Redirect} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Copyright from "../Copyright/Copyright";
import UserJobsList from "./UserJobsList";

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UserProfilePage({loggedIn = true}) {
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
        <UserJobsList title='MEINE NÄCHSTEN JOBS' userId={userId} jobStatus="accepted"/>
        <UserJobsList title='OFFENE BEWERBUNGEN' userId={userId} jobStatus="requested"/>
      </div>
      <Box mt={8}>
        <Copyright/>
      </Box>
    </Container>
  );
}