import React from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage/WelcomePage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
    <Header/>
      <WelcomePage/>
      <NavigationBar/>
    </div>
  );
}

export default App;
