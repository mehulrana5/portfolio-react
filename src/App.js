import './App.css';
import './componenets/css/root.css'

import React from 'react'
import Nav from './componenets/Nav';
import {MyContextProvider} from './MyContext';

function App() {

  return (
    <MyContextProvider>
      <div className="App">
        <div className="background"></div>
        <Nav />
      </div>
    </MyContextProvider>
  );
}

export default App;
