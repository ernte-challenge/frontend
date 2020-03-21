import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import SomeExampleComponent from './components/SomeExampleComponent/SomeExampleComponent';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <h1>Ernte-Helfer Frontend</h1>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur magnam debitis officia vitae aspernatur vero laborum quasi labore, modi voluptatem autem placeat vel. Iste asperiores placeat eius pariatur nam veritatis?
        </div>
        <SomeExampleComponent/>
      </Container>
      <NavigationBar/>
    </div>
  );
}

export default App;
