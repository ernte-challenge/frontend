import React, {ReactNode, useState} from 'react';
import UserContext from "./UserContext";

interface UserContextProviderProperties {
  children: ReactNode
}

const UserContextProvider = ({children}: UserContextProviderProperties) => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();

  const updateFirstName = (firstName: string) => {
    setFirstName(firstName);
  };

  const updateLastName = (lastName: string) => {
    setLastName(lastName);
  };

  return (
    <UserContext.Provider
      value={{
        firstName,
        lastName,
        updateFirstName,
        updateLastName
      }}>
      {children}
    </UserContext.Provider>
  )
}


export default UserContextProvider;