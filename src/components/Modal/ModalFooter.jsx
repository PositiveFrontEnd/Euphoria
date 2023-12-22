import Button from "../Button/Button";
import cx from "classnames";
import PropTypes from "prop-types";
const ModalFooter = ({
  textFirst,
  textSecondary,
  clickFirst,
  clickSecondary,
  firstBox,
  secondBox,
  classNames,
  buttonClassNameFirst,
  buttonClassNameSecond,
}) => {
  return (
    <div
      className={cx(
        classNames,
        { box__button: firstBox },
        { "box__button-second": secondBox }
      )}
    >
      {textFirst && (
        <Button classNames={buttonClassNameFirst} click={clickFirst}>
          {textFirst}
        </Button>
      )}
      {textSecondary && (
        <Button classNames={buttonClassNameSecond} click={clickSecondary}>
          {textSecondary}
        </Button>
      )}
    </div>
  );
};
ModalFooter.propTYpes = {
  textFirst: PropTypes.string,
  textSecondary: PropTypes.string,
  clickFirst: PropTypes.func,
  clickSecondary: PropTypes.func,
  firstBox: PropTypes.string,
  secondBox: PropTypes.string,
  classNames: PropTypes.string,
  buttonClassNameSecond: PropTypes.string,
  buttonClassNameFirst: PropTypes.string,
};
export default ModalFooter;
