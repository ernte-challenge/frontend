import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import styles from "../../styles";
import {Button} from "@material-ui/core";

const WelcomePage = () => {
  const classes = styles();

  return (
    <div className={classes.fullScreenSize}>
      <Button>Stöbern</Button>
      <Button>Profil anlegen</Button>
    </div>
  )
};

export default WelcomePage;