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
const ModalText = ({ data, handleClose, handleOK }) => {
  const { article, color, name, price, url } = data;
  const isModal = useSelector(selectorIsModal);
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
            <p className="box__price">Price : {price} ₴ </p>
            <span className="box__article">Product Code : {article} </span>
            <p className="box__color">Product Color : {color} </p>
          </div>
        </ModalBody>
        <ModalFooter
          buttonClassNameFirst="button__white"
          secondBox
          textFirst="Add TO Basket"
          clickFirst={handleOK}
        />
      </Modal>
    </ModalWrapper>
  );
};
ModalText.propTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  data: PropTypes.object,
  handleOK: PropTypes.func,
};
export default ModalText;
