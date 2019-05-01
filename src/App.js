import React from 'react';
import './App.css';
import Music from './Music';
import Movies from './Movies';
import Drinks from './Drinks';

function App() {
  return (
    <div className="App">
      <h1>React Router examples</h1>
      <Music />
      <Movies />
      <Drinks />
    </div>
  );
}

export default App;
