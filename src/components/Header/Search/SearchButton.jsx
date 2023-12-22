import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Loop } from "./icons/loop.svg";
const SearchButton = ({ className, type, click }) => {
  return (
    <button type={type} className={className} onClick={click}>
      <Loop />
    </button>
  );
};
SearchButton.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};
export default SearchButton;
