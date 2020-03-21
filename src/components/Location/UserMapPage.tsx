import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import styles from "../../styles";

const UserMapPage = () => {
  const classes = styles();

  return (
    <div className={classes.fullScreenSize}>
      <Skeleton variant="text" />
    </div>
  )
};

export default UserMapPage;