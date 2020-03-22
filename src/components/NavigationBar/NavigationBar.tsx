import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PersonIcon from "@material-ui/icons/Person";
import MapIcon from "@material-ui/icons/Map";
import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  LOCATIONS_LIST_PATH,
  LOCATIONS_MAP_PATH,
  USER_PROFILE_PATH
} from "../../routes";

const useStyles = makeStyles({
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0
  }
});

const NavigationBar = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.stickToBottom}
    >
      <BottomNavigationAction
        component={Link}
        to={LOCATIONS_MAP_PATH}
        label="Karte"
        value="map"
        icon={<MapIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to={LOCATIONS_LIST_PATH}
        label="Liste"
        value="locations"
        icon={<ViewAgendaIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to={USER_PROFILE_PATH}
        label="Profil"
        value="profile"
        icon={<PersonIcon />}
      />
    </BottomNavigation>
  );
};

export default NavigationBar;
