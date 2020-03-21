import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import RegisterPage from "./components/User/RegisterPage";
import {LOCATIONS_LIST_PATH, LOCATIONS_MAP_PATH, REGISTER_PATH, USER_PROFILE_PATH} from "./routes";
import UserProfilePage from "./components/User/UserProfilePage";
import LocationListPage from "./components/Location/LocationListPage";
import LocationMapPage from "./components/Location/LocationMapPage";

const AppRoutes = () => {
  return (
        <Switch>
          <Route path={LOCATIONS_MAP_PATH}>
            <LocationMapPage/>
          </Route>
          <Route path={LOCATIONS_LIST_PATH}>
            <LocationListPage/>
          </Route>
          <Route path={USER_PROFILE_PATH}>
            <UserProfilePage/>
          </Route>
          <Route path={REGISTER_PATH}>
            <RegisterPage/>
          </Route>
          <Route exact path="/">
            <WelcomePage/>
          </Route>
        </Switch>
  )
};
export default AppRoutes;