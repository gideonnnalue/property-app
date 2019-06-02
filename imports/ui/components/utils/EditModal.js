import React, { Component } from "react";
import { Modal, Row, Col, Container } from "react-bootstrap";

import { Meteor } from 'meteor/meteor';

import { Properties } from '../../../api/properties';


class EditModal extends Component {

  state = {
    input: ""
  }

  inputHandler(e) {
    this.setState({ input: e.target.value});
  }

  componentDidMount() {
    this.setState({ input: this.props.text});
  }

  inputSetHandler() {

    Meteor.call('properties.update', this.props.id, this.state.input);

    this.props.handleClose();
  }


  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.handleClose}
        dialogClassName="modal modal__delete"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit this property?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="show-grid">
              <Col>
                <input
                  type="text"
                  className="modal__input"
                  placeholder="Enter new property"
                  width="100%"
                  value={this.state.input}
                  onChange={(e) => this.inputHandler(e)}
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <a
            href="#"
            className="btns btns--small-tertiary"
            onClick={this.props.handleClose}
          >
            Cancel
          </a>
          <a
            href="#"
            className="btns btns--small-secondary"
            onClick={() => this.inputSetHandler()}
          >
            Save
          </a>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditModal;
