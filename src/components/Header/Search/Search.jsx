import React from "react";
import PropTypes from "prop-types";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import SearchForm from "./SearchForm";
import "./Search.scss";
const Search = () => {
  return (
    <SearchForm nameForm="form">
      <SearchButton type="submit" className="form__button" />
      <SearchInput type="text" className="form__input" />
    </SearchForm>
  );
};
Search.propTYpes = {
  nameForm: PropTypes.string,
  type: PropTypes.string,
};
export default Search;
