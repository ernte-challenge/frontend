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
import {API_LOGIN_PATH, API_REGISTER_PATH} from "../../routes";
import Copyright from "../Copyright/Copyright";
import {FormControl} from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import sendRequest from "../../util/request";
import RegisterPage from "./RegisterPage";


export default function RegisterPageContainer() {
  const [userType, setUserType] = React.useState<string>();
  const [success, setSuccess] = React.useState<boolean>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [mail, setMail] = React.useState<string>();
  const [firstName, setFirstName] = React.useState<string>();
  const [lastName, setLastName] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();

  const handleSubmit = async () => {
    //TODO: Validate Input correctly
    if (userType && mail && firstName && lastName && password) {
      try {
        const res = await sendRequest(API_REGISTER_PATH, 'POST', {
          emailAddress: mail,
          firstName,
          lastName,
          password,
          userType
        });
      } catch (e) {
        setSuccess(false);
      }
      setLoading(false);
    } else {
      // TODO: DisplayValidation Response
    }
  };

  const handleUpdateMail = (mail: string): void => setMail(mail);
  const handleUpdateFirstName = (firstName: string): void => setFirstName(firstName);
  const handleUpdateLastName = (lastName: string): void => setLastName(lastName);
  // TODO: Encrypt Password
  const handleUpdatePassword = (password: string): void => setPassword(password);
  const handleUpdateUserType = (userType: string): void => setUserType(userType);

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
    <RegisterPage
      mail={mail} onUpdateMail={handleUpdateMail}
      loading={loading}
      firstName={firstName} onUpdateFirstName={handleUpdateFirstName}
      lastName={lastName} onUpdateLastName={handleUpdateLastName}
      password={password} onUpdatePassword={handleUpdatePassword}
      userType={userType} onUpdateUserType={handleUpdateUserType}
      onSubmitForm={handleSubmit}
    />
  );
}