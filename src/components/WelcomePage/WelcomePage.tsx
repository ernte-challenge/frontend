import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
  fullScreenSize: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, rgba(217,212,98,1) 0%, rgba(195,212,98,1) 31%, rgba(177,212,98,1) 100%)',
  },
});

const WelcomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.fullScreenSize}>
      <Skeleton variant="text" />
    </div>
  )
};

export default WelcomePage;