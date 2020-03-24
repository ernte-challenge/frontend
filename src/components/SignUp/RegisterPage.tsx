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
import Copyright from "../Copyright/Copyright";
import {FormControl} from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

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

interface RegisterPageProperties {
  mail?: string,
  onUpdateMail: (mail: string) => void,
  firstName?: string,
  onUpdateFirstName: (firstName: string) => void,
  lastName?: string,
  onUpdateLastName: (lastName: string) => void,
  userType?: string,
  onUpdateUserType: (userType: string) => void,
  password?: string,
  onUpdatePassword: (mail: string) => void,
  loading: boolean,
  onSubmitForm: () => Promise<void>,
  validationMessage?: string
}

export default function RegisterPage({
                                       mail, onUpdateMail, firstName,
                                       onUpdateFirstName, lastName, onUpdateLastName, password,
                                       onUpdatePassword, userType, onUpdateUserType, loading, onSubmitForm, validationMessage
                                     }: RegisterPageProperties) {
  const classes = useStyles();

  return (<Container>
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
              value={mail ? mail : ""}
              onChange={(e) => {
                e.preventDefault();
                onUpdateMail(e.target.value)
              }}
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
              value={firstName ? firstName : ""}
              onChange={(e) => {
                e.preventDefault();
                onUpdateFirstName(e.target.value)
              }}
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
              value={lastName ? lastName : ""}
              onChange={(e) => {
                e.preventDefault();
                onUpdateLastName(e.target.value)
              }}
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
              value={password ? password : ""}
              onChange={(e) => {
                e.preventDefault();
                onUpdatePassword(e.target.value);
              }}
            />
            <Box mt={3}>
              <FormControl component="fieldset" required={true}>
                <FormLabel component="legend">Ich bin ...</FormLabel>
                <RadioGroup name="userType" value={userType ? userType : null} onChange={e => {
                  e.preventDefault();
                  onUpdateUserType(e.target.value)
                }}>
                  <FormControlLabel value="farmer" control={<Radio/>} label="Landwirt:in"/>
                  <FormControlLabel value="user" control={<Radio/>} label="Erntehelfer:in"/>
                </RadioGroup>
              </FormControl>
            </Box>
            <Box mt={3} style={{ height: '70px', color: 'red', display: 'flex', alignItems: 'center'}}>
              {validationMessage && <ErrorOutlineIcon fontSize={"large"}/>}
              <Typography style={{marginLeft: "1.5rem"}}>{validationMessage}</Typography>
            </Box>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onSubmitForm}
            >
              Jetzt registrieren!
            </Button>
          </form>
        </div>
        <Box mt={3}>
          <Copyright/>
        </Box>
      </Box>
    </Container>
  )
}