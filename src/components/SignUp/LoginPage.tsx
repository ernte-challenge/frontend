import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {API_REGISTER_PATH, FORGOT_PASSWORD_PATH, REGISTER_PATH} from "../../routes";
import Copyright from "../Copyright/Copyright";
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
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

export default function LoginPage() {
  const classes = useStyles();
  const [mail, setMail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>();

  const handleLogin = () => {
    setLoading(true);
    fetch(API_REGISTER_PATH, {
      method: 'POST',
      body: JSON.stringify({
        mail,
        password
      })
    }).then(res => res.json())
      .then(setSuccess)
      .then(data => setLoading(false))
      .catch(e => setSuccess(false))
  };

  if (success) {
    return <Redirect to={"/profile"}/>
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Anmelden
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-Mail"
            name="email"
            autoComplete="email"
            autoFocus
            value={mail}
            onChange={(event) => setMail(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Passwort"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
          >
            Anmelden
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href={FORGOT_PASSWORD_PATH} variant="body2">
                Passwort vergessen?
              </Link>
            </Grid>
            <Grid item>
              <Link href={REGISTER_PATH} variant="body2">
                Hier Registrieren!
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={3}>
        <Copyright/>
      </Box>
    </Container>
  );
}