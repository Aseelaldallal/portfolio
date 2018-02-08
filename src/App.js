import React, { Component } from 'react';
import NavBar from './components/Navigation/NavBar/NavBar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import FeaturedProjects from './components/Featured Projects/FeaturedProjects';
import CurrentProject from './components/CurrentProject/CurrentProject';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
        <Skills />
        <FeaturedProjects />
        <CurrentProject />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
