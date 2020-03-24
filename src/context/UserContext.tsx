import React from 'react';

export interface UserContextProperties {
  loggedIn: boolean,
  userId?: string,
  firstName?: string,
  lastName?: string
  updateFirstName: (firstName: string) => void,
  updateLastName: (lastName: string) => void,
  updateUserId: (userId: string) => void,
  updateLoggedIn: (loggedIn: boolean) => void,
}

const UserContext = React.createContext<UserContextProperties>({
  loggedIn: false,
  updateFirstName: (firstName: string) => {throw new Error("error: fill context")},
  updateLastName: (lastName: string) => {throw new Error("error: fill context")},
  updateUserId: (userId: string) => {throw new Error("error: fill context")},
  updateLoggedIn: (loggedIn: boolean) => {throw new Error("error: fill context")},
});

export default UserContext;