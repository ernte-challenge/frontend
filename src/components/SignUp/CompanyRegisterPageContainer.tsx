import React from 'react';
import {API_COMPANY_REGISTER_PATH, API_USER_REGISTER_PATH} from "../../routes";
import sendRequest from "../../util/request";
import {validateEmail} from "../../util/validation";
import CompanyRegisterPage from "./CompanyRegisterPage";

export default function CompanyRegisterPageContainer() {
  const [success, setSuccess] = React.useState<boolean>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [mail, setMail] = React.useState<string>();
  const [companyName, setCompanyName] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [validationMessage, setValidationMessage] = React.useState<string>();

  const getInputValidationErrorMessage = (): string | void => {
    if (!mail || !validateEmail(mail)) {
      return "Bitte tragen Sie eine gültige E-Mail-Adresse ein.";
    }
    if (!companyName || companyName.length < 2) {
      return "Bitte geben Sie den Namen Ihres Betriebs an.";
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
        const res = await sendRequest(API_COMPANY_REGISTER_PATH, 'POST', {
          emailAddress: mail,
          name: companyName,
          password,
        });
        if (!res.ok) {
          setValidationMessage("Ups! Beim Registrieren ist ein technischer Fehler aufgetreten.");
          setSuccess(false);
        } else {
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
  const handleUpdateCompanyName = (companyName: string): void => setCompanyName(companyName);
  const handleUpdatePassword = (password: string): void => setPassword(password);

//TODO: Show SVG
  const successForm = (
    <div>
      <div>Herzlich willkommen!</div>
      <div>Der Betrieb {companyName} ist nun auf Stadt.Land.Ernte angemeldet!</div>
    </div>
  );

  if (success) {
    return successForm
  }

  return (
    <CompanyRegisterPage
      mail={mail} onUpdateMail={handleUpdateMail}
      loading={loading}
      companyName={companyName} onUpdateCompanyName={handleUpdateCompanyName}
      password={password} onUpdatePassword={handleUpdatePassword}
      onSubmitForm={handleSubmit} validationMessage={validationMessage}
    />
  );
}