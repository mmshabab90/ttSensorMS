import React from "react";
import { Link } from "react-router-dom";

const TopBar = (props) => {
  return (
    <nav className="green lighten-3 z-depth-2">
      <div className="nav-wrapper">
        <div className="row">
          <div className="col s12">
            <a
              href="/#"
              data-target="slide-out"
              className="left sidenav-trigger hide-on-medium-and-up"
            >
              <i className="material-icons">menu</i>
            </a>

            <Link to="/" className="brand-logo black-text">
              {props.title}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
