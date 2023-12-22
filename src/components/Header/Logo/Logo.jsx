import React from "react";
import PropTypes from "prop-types";
import Group from "./Group";
import Euphoria from "./Euphoria";
import "./Logo.scss";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/" className="nav__logo logo">
      <Euphoria></Euphoria>
      <Group></Group>
    </Link>
  );
};

export default Logo;
