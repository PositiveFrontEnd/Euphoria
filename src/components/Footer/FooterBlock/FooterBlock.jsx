import React from "react";
import PropTypes from "prop-types";
const FooterBlock = ({ children }) => {
  return <div>{children}</div>;
};
FooterBlock.propTypes = {
  children: PropTypes.any,
};
export default FooterBlock;
