import React from 'react';
import classes from './FeaturedProjects.css';
import Title from '../UI/Title/Title';

const FeaturedProjects = () => {
  return (
    <section className={classes.featuredProjects}>
      <Title
        title="Featured Projects"
        subheading="Psst.. Checkout the github links for notes on how each app was developed."
      />
    </section>
  );
};

export default FeaturedProjects;
