import React from "react";
import Modal from "../Modal/Modal";
import ModalBody from "../Modal/ModalBody";
import ModalFooter from "../Modal/ModalFooter";
import ModalWrapper from "../Modal/ModalWrapper";
import ModalClose from "../Modal/ModalClose";
import "../Modal/Modal.scss";
import PropTypes from "prop-types";
import ModalHeader from "../Modal/ModalHeader";
import { useSelector } from "react-redux";
import { selectorIsModal } from "../../store/selectors";
const ModalBasket = ({ data, handleClose, handleOK }) => {
  const isModal = useSelector(selectorIsModal);
  const { name, url } = data;
  return (
    <ModalWrapper isOpen={isModal} clickWrapper={handleClose}>
      <Modal>
        <ModalClose firstColor click={handleClose} />
        <ModalHeader>
          <img className="box__img" src={url} alt="picture" />
        </ModalHeader>
        <ModalBody>
          <div className="box__info">
            <h4 className="box__name">Product Name : {name} </h4>
          </div>
        </ModalBody>
        <ModalFooter
          buttonClassNameFirst="button__white"
          secondBox
          textFirst="Delete ?"
          clickFirst={handleOK}
        />
      </Modal>
    </ModalWrapper>
  );
};
ModalBasket.propTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  data: PropTypes.object,
  handleOK: PropTypes.func,
};
export default ModalBasket;
