// React
import React from 'react';
// Components
import Title from '../UI/Title/Title';
import Project from '../Project/Project';
// Images
import burger from '../../assets/images/projectImages/burger.PNG';
// Style
import classes from './FeaturedProjects.css';

const FeaturedProjects = () => {
  return (
    <section className={classes.featuredProjects}>
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
      />
    </section>
  );
};

export default FeaturedProjects;
