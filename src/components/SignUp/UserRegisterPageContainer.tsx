import React, {useContext} from 'react';
import {API_USER_REGISTER_PATH} from "../../routes";
import sendRequest from "../../util/request";
import UserRegisterPage from "./UserRegisterPage";
import UserContext from "../../context/UserContext";
import {validateEmail} from "../../util/validation";

export default function UserRegisterPageContainer() {
  const [success, setSuccess] = React.useState<boolean>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [mail, setMail] = React.useState<string>();
  const [firstName, setFirstName] = React.useState<string>();
  const [lastName, setLastName] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [validationMessage, setValidationMessage] = React.useState<string>();

  const {updateLoggedIn, updateUserId, updateFirstName, updateLastName} = useContext(UserContext);

  const updateUserDetails = () => {
    updateLoggedIn(true);
    // TODO: request user/info
  };

  const getInputValidationErrorMessage = (): string | void => {
    if (!mail || !validateEmail(mail)) {
      return "Bitte tragen Sie eine gültige E-Mail-Adresse ein.";
    }
    if (!firstName || firstName.length < 2) {
      return "Bitte geben Sie Ihren Vornamen an.";
    }
    if (!lastName || lastName.length < 2) {
      return "Bitte geben Sie Ihren Nachnamen an.";
    }
    if (!password || password.length < 8) {
      return "Bitte legen Sie ein Password bestehend aus mindestens 8 Zeichen fest.";
    }
  };

  const handleSubmit = async () => {
    const validateText = getInputValidationErrorMessage();
    if (validateText) {
      setValidationMessage(validateText);
    } else {
      setValidationMessage(undefined);
      try {
        const res = await sendRequest(API_USER_REGISTER_PATH, 'POST', {
          emailAddress: mail,
          firstName,
          lastName,
          password,
        });
        if (!res.ok) {
          setValidationMessage("Ups! Beim Registrieren ist ein technischer Fehler aufgetreten.");
          setSuccess(false);
        } else {
          updateUserDetails();
          setSuccess(true);
        }
      } catch (e) {
        setValidationMessage("Ups! Beim Registrieren ist ein technischer Fehler aufgetreten.");
        setSuccess(false);
      }
      setLoading(false);
    }
  };

  const handleUpdateMail = (mail: string): void => setMail(mail);
  const handleUpdateFirstName = (firstName: string): void => setFirstName(firstName);
  const handleUpdateLastName = (lastName: string): void => setLastName(lastName);
  const handleUpdatePassword = (password: string): void => setPassword(password);

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
    <UserRegisterPage
      mail={mail} onUpdateMail={handleUpdateMail}
      loading={loading}
      firstName={firstName} onUpdateFirstName={handleUpdateFirstName}
      lastName={lastName} onUpdateLastName={handleUpdateLastName}
      password={password} onUpdatePassword={handleUpdatePassword}
      onSubmitForm={handleSubmit} validationMessage={validationMessage}
    />
  );
}