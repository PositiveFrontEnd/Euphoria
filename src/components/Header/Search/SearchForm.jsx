import React from "react";
import PropTypes from "prop-types";
const SearchForm = ({ children, nameForm }) => {
  return <form className={nameForm}>{children}</form>;
};
SearchForm.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string,
  nameForm: PropTypes.string,
};
export default SearchForm;
