import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
const Modal = ({ children, classNames }) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <div
        onClick={stopPropagation}
        className={cx("wrapper__box box container", classNames)}
      >
        {children}
      </div>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  first: PropTypes.string,
  second: PropTypes.bool,
  classNames: PropTypes.string,
  clickWrapper: PropTypes.func,
};
export default Modal;
