import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import AppRoutes from "./AppRoutes";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter as Router} from "react-router-dom";

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
      <Router>
          <div className="App">
            <AppRoutes/>
            <NavigationBar/>
          </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
