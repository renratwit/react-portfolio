import React from 'react';
import './App.css';
import About from './components/About'
import Info from './components/Info'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <About />
      <Info />
      <Projects/>
    </div>
  );
}

export default App;
