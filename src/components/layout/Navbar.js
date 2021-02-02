import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import UserItem from "../users/UserItem";
import "../../App.css";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className="fab fa-github" /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github finder",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Navbar;
