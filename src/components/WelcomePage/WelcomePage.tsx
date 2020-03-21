import React from 'react';
import {Link} from "react-router-dom";
import styles from "../../styles";
import {Button} from "@material-ui/core";

const WelcomePage = () => {
  const classes = styles();

  return (
    <div className={classes.fullScreenSize}>
      <nav>
        <Link to="/map">
          <Button>Stöbern</Button>
        </Link>
        <Link to="/locations">
          <Button>Profil anlegen</Button>
        </Link>
      </nav>
    </div>
  )
};

export default WelcomePage;