import cx from "classnames";
import Button from "../Button/Button";
import "./ModalClose.scss";
import PropTypes from "prop-types";
const ModalClose = ({ click, firstColor, secondColor, classNames }) => {
  return (
    <Button
      type="button"
      className={cx(
        classNames,
        { box__closeButton: firstColor },
        { "box__closeButton-white": secondColor }
      )}
      onClick={click}
    >
      X
    </Button>
  );
};
ModalClose.propTypes = {
  click: PropTypes.func,
  firstColor: PropTypes.bool,
  secondColor: PropTypes.bool,
  classNames: PropTypes.string,
};
export default ModalClose;
