import React from "react";
import PropTypes from "prop-types";
const Title = ({ text }) => {
  return <h5 className="footer__title">{text}</h5>;
};
Title.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};
export default Title;
