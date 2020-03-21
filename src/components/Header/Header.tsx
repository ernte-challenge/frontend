import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../styles";


const Header = () => {
  const classes = styles();

  return (
    <div className={classes.header}>
      Stadt. Land. Ernte.
    </div>
  )
};

export default Header;