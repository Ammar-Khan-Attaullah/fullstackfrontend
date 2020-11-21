import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { pathname: "/" };
  }
  checkActive = () => {};

  render() {
    return (
      <Fragment>
        <div className="sidenav">sidebar</div>
      </Fragment>
    );
  }
}

export default Sidebar;
