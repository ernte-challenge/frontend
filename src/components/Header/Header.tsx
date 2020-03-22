import React from "react";
import styles from "../../styles/general";


const Header = () => {
  const classes = styles();

  return (
    <div className={classes.header}>
      Stadt. Land. Ernte.
    </div>
  )
};

export default Header;
