import React from "react";
import PropTypes from "prop-types";
const ListItem = ({ text }) => {
  return <li className="nav__item">{text}</li>;
};

ListItem.propTypes = {
  text: PropTypes.string,
};
export default ListItem;
