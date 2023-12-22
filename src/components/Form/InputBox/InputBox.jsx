import React from "react";
import { Field, ErrorMessage } from "formik";
import cn from "classnames";
import PropTypes from "prop-types";
import "./InputBox.scss";
const InputBox = (props) => {
  const { className, label, type, name, placeholder, error, ...restProps } =
    props;
  return (
    <label className={cn("form__item", className, { has__validation: error })}>
      <p className="form__label">{label}</p>
      <Field
        type={type}
        className="form__control"
        name={name}
        placeholder={placeholder}
        {...restProps}
      />
      <ErrorMessage className="error__massage" name={name} component="p" />
    </label>
  );
};
InputBox.defaultProps = {
  type: "text",
};

InputBox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};
export default InputBox;
