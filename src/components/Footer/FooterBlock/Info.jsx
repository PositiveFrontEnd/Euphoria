import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Info = ({ text }) => {
  return (
    <Link className="footer__info" to="/">
      {text}
    </Link>
  );
};
Info.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};
export default Info;
