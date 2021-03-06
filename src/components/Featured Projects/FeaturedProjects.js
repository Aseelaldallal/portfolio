// React
import React from 'react';
// Components
import Title from '../UI/Title/Title';
import Project from '../Project/Project';
// Style
import classes from './FeaturedProjects.css';

const FeaturedProjects = () => {
  return (
    <section id="projects" className={classes.featuredProjects}>
      <Title
        title="Featured Projects"
        subheading="Psst.. Checkout the github links for notes on how each app was developed."
      />
      <Project
        alignPicRight
        title="Build A Burger"
        description="Web App that allows registered users to build a burger and purchase it. Go ahead. Test it out!"
        tech="React, Redux, Firebase"
        image="burger"
        gitLink="https://github.com/Aseelaldallal/burger-builder"
        visitLink="https://react-burger-builder-4b067.firebaseapp.com/"
      />
      <Project
        title="EventFUL"
        description="Full Stack REST-complaint web app that allows users to access and promote local event listings."
        tech="Node.js, Express, MongoDB, JavaScript, EJS, Bootstrap, Amazon S3, Google Places API, Google Maps API, Heroku"
        image="burger"
        gitLink="https://github.com/Aseelaldallal/Event-App"
        visitLink="https://eventfulcanada.herokuapp.com/"
      />
      <Project
        alignPicRight
        title="YelpCAMP"
        description="Full Stack REST-compliant web app that allows users to search for campgrounds around the world. Users can also register to add, rate and review campgrounds."
        tech="Node.js, Express, MongoDB, JavaScript, Bootstrap, EJS, Amazon S3, Heroku, Google Places API, Google Maps API"
        image="burger"
        gitLink="https://github.com/Aseelaldallal/yelpcamp"
        visitLink="https://aseel-yelpcamp.herokuapp.com/"
      />
    </section>
  );
};

export default FeaturedProjects;
