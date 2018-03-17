import React from "react";
import { Link } from "react-scroll";
import classes from "./MenuItem.css";

const MenuItem = props => {
  return (
    <Link
      className={classes.menuItem}
      activeClass={classes.active}
      to={props.to}
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
      onClick={props.clicked}
    >
      {props.name}
    </Link>
  );
};

export default MenuItem;
