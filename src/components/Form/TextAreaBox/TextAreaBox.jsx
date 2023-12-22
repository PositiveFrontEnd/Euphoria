import React from "react";
import { Field, ErrorMessage } from "formik";
import cn from "classnames";
import PropTypes from "prop-types";
import "./TextArea.scss";
const TextAreaBox = (props) => {
  const { className, label, rows, name, placeholder, error, ...restProps } =
    props;
  return (
    <label className={cn("form__item", className, { has__validation: error })}>
      <p className="form__label">{label}</p>
      <Field
        className="form__control"
        as="textarea"
        name={name}
        rows={rows}
        placeholder={placeholder}
        {...restProps}
      />
      <ErrorMessage className="error__massage" name={name} component="p" />
    </label>
  );
};

TextAreaBox.defaultProps = {
  rows: 3,
};

TextAreaBox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  rows: PropTypes.number,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.object,
};

export default TextAreaBox;
