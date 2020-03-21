import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Header from "./components/Header/Header";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className="App">
      <AppRoutes/>
      <NavigationBar/>
    </div>
  );
}

export default App;
