import React from "react";
import Modal from "./Modal";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import ModalWrapper from "./ModalWrapper";
import ModalClose from "./ModalClose";
import "./Modal.scss";
import PropTypes from "prop-types";

const ModalBasic = ({
  title,
  desc,
  handleCancel,
  handleClose,
  handleDelete,
  isOpen,
  clickWrapper,
}) => {
  return (
    <ModalWrapper isOpen={isOpen} clickWrapper={clickWrapper}>
      <Modal>
        <ModalClose click={handleClose} />
        <ModalHeader></ModalHeader>
        <ModalBody>
          <h2>{title}</h2>
          <p>{desc}</p>
        </ModalBody>
        <ModalFooter
          textFirst="NO,CANCEL"
          textSecondary="YES,DELETE"
          clickFirst={handleCancel}
          clickSecondary={handleDelete}
        />
      </Modal>
    </ModalWrapper>
  );
};
ModalBasic.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  handleCancel: PropTypes.func,
  handleClose: PropTypes.func,
  handleDelete: PropTypes.func,
  isOPen: PropTypes.bool,
  clickWrapper: PropTypes.func,
};
export default ModalBasic;
