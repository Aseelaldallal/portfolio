// React
import React from 'react';
// Components
import Title from '../UI/Title/Title';
import IconAndLink from '../UI/IconAndLink/IconAndLink';
// Style
import classes from './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className={classes.contact}>
      <Title title="Let's Connect" subheading="Because why not?" />
      <div className={classes.contactInfo}>
        <IconAndLink
          link="mailto:aseelaldallal@gmail.com"
          text="aseelaldallal@gmail.com"
          icon="fa fa-envelope"
        />
        <IconAndLink
          link="https://www.linkedin.com/in/aseelaldallal/"
          text="in/aseelaldallal"
          icon="fa fa-linkedin"
        />
        <IconAndLink
          link="https://github.com/Aseelaldallal"
          text="github/aseelaldallal"
          icon="fa fa-github-square"
        />
      </div>
    </section>
  );
};

export default Contact;
