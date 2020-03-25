import React, {useState} from 'react';
import {API_USER_LOGIN_PATH} from "../../routes";
import {Redirect} from 'react-router-dom';
import LoginPage from "./LoginPage";
import sendRequest from "../../util/request";

export default function LoginPageContainer() {
  const [mail, setMail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>();
  const [validationMessage, setValidationMessage] = React.useState<string>();

  const handleLogin = async () => {
    setLoading(true);
    // TODO: Encrypt password
    try {
      const res = await sendRequest(API_USER_LOGIN_PATH, 'POST', {
        emailAddress: mail,
        password: password
      });
      if (!res.ok) {
        setValidationMessage("Ups! Beim Anmelden ist ein technischer Fehler aufgetreten.");
        setSuccess(false);
      } else {
        setSuccess(true);
      }
    } catch (e) {
      setValidationMessage("Ups! Beim Anmelden ist ein technischer Fehler aufgetreten.");
      setSuccess(false);
    }
    setLoading(false);
  };

  const handleUpdatePassword = (password: string): void => {
    setPassword(password)
  };

  const handleUpdateMail = (mail: string): void => {
    setMail(mail)
  };

  if (success) {
    return <Redirect to={"/profile"}/>
  }

  return (
    <LoginPage
      onUpdateMail={handleUpdateMail}
      mail={mail}
      onUpdatePassword={handleUpdatePassword}
      password={password}
      onSubmitForm={handleLogin}
      loading={loading}
      validationMessage={validationMessage}
    />
  );
}