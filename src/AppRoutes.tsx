import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import LocationList from "./components/Location/LocationList";
import UserMapPage from "./components/Location/UserMapPage";

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/locations">
            <LocationList/>
          </Route>
          <Route path="/map">
            <UserMapPage/>
          </Route>
          <Route path="/">
            <WelcomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
};
export default AppRoutes;