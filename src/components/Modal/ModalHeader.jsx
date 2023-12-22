import PropTypes from "prop-types";
const ModalHeader = ({ children }) => {
  return <div className="box__color">{children}</div>;
};
ModalHeader.propTypes = {
  children: PropTypes.any,
};

export default ModalHeader;
