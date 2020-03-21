import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

const NavigationBar = () => {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.stickToBottom}>
      <BottomNavigationAction label="Recents" icon={<RestoreIcon/>}/>
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>}/>
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>}/>
    </BottomNavigation>
  )
};

export default NavigationBar;