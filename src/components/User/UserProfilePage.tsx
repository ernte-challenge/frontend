import React from 'react';
import {LOGIN_PAGE_PATH} from "../../routes";
import {Redirect} from 'react-router-dom';

const UserProfilePage = () => {
  const loggedIn = false;

  if (!loggedIn) {
    return <Redirect to={LOGIN_PAGE_PATH}/>
  }

  return (
    <div>This will be a profile page</div>
  )
};

export default UserProfilePage;