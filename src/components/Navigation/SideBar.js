import React from "react";
import { NavLink, Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <ul
      id="slide-out"
      className="sidenav sidenav-fixed z-depth-3 lime lighten-5"
    >
      <li>
        <div className="user-view" style={{ textAlign: "center" }}>
          <Link to="/" className="flow-text black-text">
            Table Tennis-Kit
          </Link>
          <div className="divider" />
        </div>
      </li>
      <li>
        <NavLink to="/" onClick={() => props.onSideNavItemClick("Dashboard")}>
          <i className="material-icons">dashboard</i> Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/el-watch"
          onClick={() => props.onSideNavItemClick("El-Watch Sensors")}
        >
          <i className="material-icons">fiber_smart_record</i> El-Watch Sensors
        </NavLink>
      </li>
    </ul>
  );
};

export default SideBar;
