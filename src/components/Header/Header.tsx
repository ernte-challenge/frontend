import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    header: {
      width: '100%',
      position: 'fixed',
      textAlign: 'center',
      fontSize: '1.8rem',
      borderBottom: '1px solid white',
      textTransform: 'uppercase',
      paddingTop: '1rem',
      paddingBottom: '0.5rem',
    },
  })
;

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      Stadt. Land. Ernte.
    </div>
  )
};

export default Header;