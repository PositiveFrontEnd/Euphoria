import "./Modal.scss";
import "./ModalFooter";
import PropTypes from "prop-types";
const ModalWrapper = ({ children, isOpen, clickWrapper }) => {
  const handleWrapperClick = () => {
    if (isOpen && clickWrapper) {
      clickWrapper();
    }
  };
  return (
    isOpen && (
      <div
        data-testid="wrapper"
        onClick={handleWrapperClick}
        className="wrapper"
      >
        {children}
      </div>
    )
  );
};

ModalWrapper.propTypes = {
  children: PropTypes.any,
  isOpen: PropTypes.bool,
  clickWrapper: PropTypes.func,
};

export default ModalWrapper;
