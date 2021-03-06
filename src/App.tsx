import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import AppRoutes from "./AppRoutes";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter as Router} from "react-router-dom";
import UserContextProvider from "./context/UserContextProvider";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#4D917E'
      },
      secondary: {
        main: '#DCDCDC'
      }
    }
  },
)

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      {/* eslint-disable-next-line react/jsx-no-undef */}
        <UserContextProvider>
          <Router>
            <div className="App">
              <AppRoutes/>
              <NavigationBar/>
            </div>
          </Router>
        </UserContextProvider>
    </MuiThemeProvider>
  );
}

export default App;
