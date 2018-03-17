import React from "react";
import classes from "./Home.css";
import profilePic from "../../assets/images/HomePic.jpg";

const Home = () => {
  return (
    <section className={classes.home} id="Home">
      <img className={classes.image} alt="aseelpic" src={profilePic} />
      <div>
        <div className={classes.name}>
          <h1> Aseel </h1>
          <h1> Al Dallal </h1>
        </div>
        <div className={classes.about}>
          <p>
            {" "}
            <span className={classes.highlight}>
              Full Stack Developer.
            </span>{" "}
            Athlete. Humanitarian.{" "}
            <span className={classes.highlight}>Innovator</span>{" "}
          </p>
          <p>
            {" "}
            Adventurer. Reader.{" "}
            <span className={classes.highlight}>Hacker.</span> Animal Lover.
            Teacher{" "}
          </p>
          <p>
            {" "}
            <span className={classes.highlight}>
              {" "}
              Problem Solver.{" "}
            </span> Foodie.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
