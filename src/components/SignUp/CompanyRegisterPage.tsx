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
import ValidationMessageBox from "./ValidationMessageBox";

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
  companyName?: string,
  onUpdateCompanyName: (companyName: string) => void,
  password?: string,
  onUpdatePassword: (mail: string) => void,
  loading: boolean,
  onSubmitForm: () => Promise<void>,
  validationMessage?: string
}

export default function CompanyRegisterPage({
                                              mail, onUpdateMail, companyName, onUpdateCompanyName,
                                              password, onUpdatePassword, loading, onSubmitForm, validationMessage
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
              value={companyName ? companyName : ""}
              onChange={(e) => {
                e.preventDefault();
                onUpdateCompanyName(e.target.value)
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
            <ValidationMessageBox message={validationMessage}/>
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