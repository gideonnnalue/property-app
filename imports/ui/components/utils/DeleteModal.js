import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Meteor } from 'meteor/meteor';

const DeleteModal = (props) => {

  const deleteHandler = () => {

    Meteor.call('properties.remove', props.id);

    props.handleClose();
  }
  return (
    <Modal show={props.show} onHide={props.handleClose} dialogClassName="nodal modal__delete">
      <Modal.Header closeButton>
        <Modal.Title>Delete this property?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          Are you sure you want to delete this item?
      </Modal.Body>
      <Modal.Footer>
            <a href="#" className="btns btns--small-tertiary" onClick={props.handleClose}>No</a>
            <a href="#" className="btns btns--small-secondary" onClick={() => deleteHandler()}>Yes</a>

      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
