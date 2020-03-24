import React from 'react';

interface UserContextInterface {
  firstName?: string,
  lastName?: string
}
const UserContext = React.createContext<UserContextInterface>({});
export default UserContext;