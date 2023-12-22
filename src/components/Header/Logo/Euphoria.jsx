import React from "react";
import PropTypes from "prop-types";
const Euphoria = ({ title }) => {
  return <span className="logo__euphoria">{title}</span>;
};
Euphoria.defaultProps = {
  title: "Euphoria",
};
Euphoria.propTypes = {
  title: PropTypes.string,
};
export default Euphoria;
