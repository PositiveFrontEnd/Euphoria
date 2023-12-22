import React from "react";
import PropTypes from "prop-types";
const NavList = ({ children }) => {
  return <ul className="nav__list">{children}</ul>;
};

NavList.propTypes = {
  children: PropTypes.any,
};
export default NavList;
