import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import React from "react";

const NavigationBar = () => {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  console.log(value);

  return (
    <BottomNavigation value={value} onChange={handleChange} className="BottomNavigation">
      <BottomNavigationAction label="Recents" icon={<RestoreIcon/>}/>
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>}/>
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>}/>
    </BottomNavigation>
  )
};

export default NavigationBar;