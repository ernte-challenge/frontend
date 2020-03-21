import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PersonIcon from '@material-ui/icons/Person';
import MapIcon from "@material-ui/icons/Map";
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
      <BottomNavigationAction label="Karte" icon={<MapIcon/>}/>
      <BottomNavigationAction label="Liste" icon={<LocationOnIcon/>}/>
      <BottomNavigationAction label="Profil" icon={<PersonIcon/>}/>
    </BottomNavigation>
  )
};

export default NavigationBar;