import React, {ReactNode, useState} from 'react';
import UserContext from "./UserContext";

interface UserContextProviderProperties {
  children: ReactNode
}

const UserContextProvider = ({children}: UserContextProviderProperties) => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>();

  const updateFirstName = (firstName: string) => setFirstName(firstName);
  const updateLastName = (lastName: string) => setLastName(lastName);
  const updateLoggedIn = (loggedIn: boolean) => setLoggedIn(loggedIn);
  const updateUserId = (userId: string) => setUserId(userId);

  return (
    <UserContext.Provider
      value={{
        loggedIn,
        userId,
        firstName,
        lastName,
        updateFirstName,
        updateLastName,
        updateLoggedIn,
        updateUserId
      }}>
      {children}
    </UserContext.Provider>
  )
}


export default UserContextProvider;