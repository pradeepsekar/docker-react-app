import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MyComponent  from './MyComponent';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello World...</h1>
        <MyComponent/>
      </header>
    </div>
  );
}

export default App;
