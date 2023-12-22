import React from "react";
import PropTypes from "prop-types";
const SearchInput = ({ type, className }) => {
  return <input className={className} type={type} />;
};
SearchInput.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};
export default SearchInput;
