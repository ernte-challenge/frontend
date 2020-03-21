import React from 'react';
import styles from "../../styles";
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {REGISTER_PATH} from "../../routes";
import {Redirect} from 'react-router-dom';

const UserProfilePage = () => {
  const loggedIn = false;

  if (!loggedIn) {
    return <Redirect to={REGISTER_PATH}/>
  }

  return (
    <div>This will be a profile page</div>
  )
};

export default UserProfilePage;