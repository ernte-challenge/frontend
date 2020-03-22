import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {API_REGISTER_PATH} from "../../routes";
import Copyright from "../Copyright/Copyright";
import {FormControl} from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

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
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginPage() {
  const classes = useStyles();

  const [userType, setUserType] = React.useState<string>();
  const [success, setSuccess] = React.useState<boolean>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [mail, setMail] = React.useState<string>();
  const [firstName, setFirstName] = React.useState<string>();
  const [lastName, setLastName] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserType((event.target as HTMLInputElement).value);
  };

  const handleSubmit = () => {
    if (userType && mail && firstName && lastName && password) {
      //TODO: Validate Input correctly
      setLoading(true);
      fetch(API_REGISTER_PATH, {
        method: 'POST',
        body: JSON.stringify({
          mail,
          firstName,
          lastName,
          password,
          userType
        })
      }).then(res => {
        if (res.status > 201) {
          setSuccess(false);
          //Todo: Show error message if request failed
          return
        }
        return res.json()
      })
        .then(setSuccess)
        .then(data => setLoading(false))
        .catch(e => setSuccess(false))
    } else {
      // TODO: Show Info Message to fill out User Type
    }
  };

  const registrationForm = <Container>
    <Box component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrieren
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
            id="firstName"
            label="Vorname"
            name="firstName"
            autoComplete="given-name"
            autoFocus
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Nachname"
            name="lastName"
            autoComplete="family-name"
            autoFocus
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
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
            autoComplete="new-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Box mt={3}>
            <FormControl component="fieldset" required={true}>
              <FormLabel component="legend">Ich bin ...</FormLabel>
              <RadioGroup name="userType" value={userType} onChange={handleChange}>
                <FormControlLabel value="farmer" control={<Radio/>} label="Landwirt:in"/>
                <FormControlLabel value="user" control={<Radio/>} label="Erntehelfer:in"/>
              </RadioGroup>
            </FormControl>
          </Box>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Jetzt registrieren!
          </Button>
        </form>
      </div>
      <Box mt={3}>
        <Copyright/>
      </Box>
    </Box>
  </Container>;

  //TODO: Show SVG
  const successForm = (
    <div>
        <div>Vielen Dank!</div>
        <div>Super, wie du Landwirte unterstützt, die Ernte zu retten!</div>
        <div>Du hast gerade 300kg Kartoffeln gerettet!</div>
        <div>Mach weiter so!</div>
    </div>
  );

  if (success) {
    return successForm
  }

  return (
    registrationForm
  );
}