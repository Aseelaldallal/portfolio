import React, { Component } from 'react';
import NavBar from './components/Navigation/NavBar/NavBar';
import Home from './components/Home/Home';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
      </div>
    );
  }
}

export default App;
