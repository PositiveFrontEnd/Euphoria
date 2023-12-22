import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = (props) => {
  const {
    type,
    classNames,
    children,
    click,
    firstModal,
    secondModal,
    animation,
    ...restProps
  } = props;
  return (
    !animation && (
      <button
        onClick={click}
        className={cx(
          classNames,
          { first__modal: firstModal },
          { second__modal: secondModal }
        )}
        type={type}
        {...restProps}
      >
        {children}
      </button>
    )
  );
};
Button.defaultProps = {
  type: "button",
  click: () => {},
};

Button.propTypes = {
  classNames: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any,
  click: PropTypes.func,
  firstModal: PropTypes.bool,
  secondModal: PropTypes.bool,
};

export default Button;
