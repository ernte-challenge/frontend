import React from "react";
import { Switch, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import {
  LOCATIONS_PATH,
  LOCATIONS_MAP_PATH,
  LOGIN_PAGE_PATH,
  USER_REGISTER_PATH,
  USER_PROFILE_PATH, COMPANY_REGISTER_PATH
} from "./routes";
import UserProfilePage from "./components/User/UserProfilePage";
import LocationListPage from "./components/Location/LocationListPage";
import LocationMapPage from "./components/Location/LocationMapPage";
import LoginPageContainer from "./components/SignUp/LoginPageContainer";
import UserRegisterPageContainer from "./components/SignUp/UserRegisterPageContainer";
import LocationDetailPageContainer from "./components/Location/LocationDetailPageContainer";
import CompanyRegisterPageContainer from "./components/SignUp/CompanyRegisterPageContainer";

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
      <Route path={USER_REGISTER_PATH}>
        <UserRegisterPageContainer />
      </Route>
      <Route path={COMPANY_REGISTER_PATH}>
        <CompanyRegisterPageContainer />
      </Route>
      <Route path={`${LOCATIONS_PATH}/:locationId`}>
        <LocationDetailPageContainer />
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
