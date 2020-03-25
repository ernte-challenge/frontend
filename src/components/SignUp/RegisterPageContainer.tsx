import React, {useContext} from 'react';
import {API_USER_REGISTER_PATH} from "../../routes";
import sendRequest from "../../util/request";
import RegisterPage from "./RegisterPage";
import UserContext from "../../context/UserContext";
import {validateEmail} from "../../util/validation";

interface UserDataResponse {
  userId: string,
  firstName: string,
  lastName: string
}

export default function RegisterPageContainer() {
  const [userType, setUserType] = React.useState<string>();
  const [success, setSuccess] = React.useState<boolean>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [mail, setMail] = React.useState<string>();
  const [firstName, setFirstName] = React.useState<string>();
  const [lastName, setLastName] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [validationMessage, setValidationMessage] = React.useState<string>();

  const {updateLoggedIn, updateUserId, updateFirstName, updateLastName} = useContext(UserContext);

  const updateUserDetails = (data: UserDataResponse) => {
    updateLoggedIn(true);
    updateUserId(data.userId);
    updateFirstName(data.firstName);
    updateLastName(data.lastName);
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
    if (!userType) {
      return "Bitte wählen Sie aus, ob Sie sich als Erntehelfer:in oder Landwirt:in registrieren möchten."
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
          userType
        });
        if (!res.ok) {
          setValidationMessage("Ups! Beim Anmelden ist ein technischer Fehler aufgetreten.");
          setSuccess(false);
        } else {
          updateUserDetails(res.data);
          setSuccess(true);
        }
      } catch (e) {
        setSuccess(false);
      }
      setLoading(false);
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
      onSubmitForm={handleSubmit} validationMessage={validationMessage}
    />
  );
}