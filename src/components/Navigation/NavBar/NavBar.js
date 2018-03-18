import React, { Component } from "react";
import { Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import Auxillary from "../../../hoc/Auxillary/Auxillary";
import MenuItem from "../MenuItem/MenuItem";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import classes from "./NavBar.css";

class Navbar extends Component {
  componentDidMount() {
    Events.scrollEvent.register("begin", function(to, element) {});
    Events.scrollEvent.register("end", function(to, element) {});
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollToBottom() {
    scroll.scrollToBottom();
  }

  scrollTo() {
    scroll.scrollTo(100);
  }

  scrollMore() {
    scroll.scrollMore(100);
  }

  render() {
    return (
      <Auxillary>
        <DrawerToggle clicked={this.props.drawerToggleClicked} />
        <div className={classes.NavBar}>
          <div className={classes.menuItemsContainer}>
            <MenuItem to="Home" name="Home" offset={0} />
            <MenuItem to="Skills" name="Skills" offset={0} />
            <MenuItem to="Projects" name="Projects" offset={0} />
            <MenuItem to="Contact" name="Contact" offset={-125} />
          </div>
        </div>
      </Auxillary>
    );
  }
}

export default Navbar;
