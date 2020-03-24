import React from 'react';
import {API_REGISTER_PATH} from "../../routes";
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
        // TODO: Set User Context
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