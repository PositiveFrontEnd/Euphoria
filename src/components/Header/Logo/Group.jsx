import React from "react";
import PropTypes from "prop-types";
const Group = ({ text }) => {
  return <span className="logo__group">{text}</span>;
};
Group.defaultProps = {
  text: "Keep is classy",
};
Group.propTypes = {
  text: PropTypes.string,
};
export default Group;
