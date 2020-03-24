import React from "react";
import { Switch, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import RegisterPage from "./components/SignUp/RegisterPage";
import {
  LOCATIONS_PATH,
  LOCATIONS_MAP_PATH,
  LOGIN_PAGE_PATH,
  REGISTER_PATH,
  USER_PROFILE_PATH
} from "./routes";
import UserProfilePage from "./components/User/UserProfilePage";
import LocationListPage from "./components/Location/LocationListPage";
import LocationMapPage from "./components/Location/LocationMapPage";
import LocationDetailPage from "./components/Location/LocationDetailPage";
import LoginPageContainer from "./components/SignUp/LoginPageContainer";
import RegisterPageContainer from "./components/SignUp/RegisterPageContainer";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path={LOCATIONS_MAP_PATH}>
        <LocationMapPage />
      </Route>
      <Route exact path={LOCATIONS_PATH}>
        <LocationListPage />
      </Route>
      <Route path={USER_PROFILE_PATH}>
        <UserProfilePage />
      </Route>
      <Route path={REGISTER_PATH}>
        <RegisterPageContainer />
      </Route>
      <Route path={`${LOCATIONS_PATH}/:locationId`}>
        <LocationDetailPage />
      </Route>
      <Route path={LOGIN_PAGE_PATH}>
        <LoginPageContainer />
      </Route>
      <Route exact path="/">
        <WelcomePage />
      </Route>
    </Switch>
  );
};
export default AppRoutes;
