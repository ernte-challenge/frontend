import React from 'react';

interface UserContextProperties {
  firstName?: string,
  lastName?: string
  updateFirstName: (firstName: string) => void,
  updateLastName: (lastName: string) => void,
}

const UserContext = React.createContext<UserContextProperties>({
  updateFirstName: (firstName: string) => {throw new Error("error: fill context")},
  updateLastName: (lastName: string) => {throw new Error("error: fill context")},
});

export default UserContext;