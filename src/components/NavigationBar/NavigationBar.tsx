import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import InfoIcon from '@material-ui/icons/Info';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HomeIcon from '@material-ui/icons/Home';
import MapIcon from "@material-ui/icons/Map";
import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";
import React from "react";
import { Link } from "react-router-dom";
import styles from '../../styles/navigation';
import {
  INFO_PATH,
  LOCATIONS_PATH,
  LOCATIONS_MAP_PATH,
  USER_PROFILE_PATH
} from "../../routes";


const NavigationBar = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const classes = styles();

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.stickToBottom}
    >
      <BottomNavigationAction
        component={Link}
        className={classes.navButtons}
        to={"/"}
        label="Home"
        value="home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        className={classes.navButtons}
        to={LOCATIONS_MAP_PATH}
        label="Karte"
        value="map"
        icon={<MapIcon />}
      />
      <BottomNavigationAction
        component={Link}
        className={classes.navButtons}
        to={LOCATIONS_PATH}
        label="Liste"
        value="locations"
        icon={<ViewAgendaIcon />}
      />
      <BottomNavigationAction
        component={Link}
        className={classes.navButtons}
        to={USER_PROFILE_PATH}
        label="Profil"
        value="profile"
        icon={<PersonOutlineIcon />}
      />
      <BottomNavigationAction
        component={Link}
        className={classes.navButtons}
        to={INFO_PATH}
        label="Info"
        value="info"
        icon={<InfoIcon />}
      />
    </BottomNavigation>
  );
};

export default NavigationBar;
