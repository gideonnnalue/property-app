import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

import DeleteModal from "./utils/DeleteModal";
import EditModal from "./utils/EditModal";
import { Properties } from "../../api/properties";

class PropertyItem extends Component {
  state = {
    items: [1, 2, 3, 4, 5],
    deleteShow: false,
    editShow: false,
    newText: "",
    id: 1
  };

  deleteHandleClose() {
    this.setState({ deleteShow: false });
  }

  deleteHandleShow() {
    this.setState({ deleteShow: true });
  }

  editHandleClose() {
    this.setState({ editShow: false });
  }

  editHandleShow() {
    this.setState({ editShow: true });
  }

  deleteHandler(id) {}
  render() {
    const id = this.props.property._id;
    return (
      <div>
        <div className="property-item">
          <p className="property-item__text">
            {this.props.property.text}
          </p>
          <a
            href="#"
            className="btns btns--small-tertiary btns--small-tertiary-item"
            onClick={() => this.editHandleShow()}
          >
            +
          </a>
          <a
            href="#"
            className="btns btns--small-secondary btns--small-secondary-item"
            onClick={() => this.deleteHandleShow()}
          >
            -
          </a>
          <hr className="property-item__bottom" />
        </div>

        <EditModal
          handleClose={() => this.editHandleClose()}
          show={this.state.editShow}
          id={this.props.property._id}
          text={this.props.property.text}
        />
        <DeleteModal
          handleClose={() => this.deleteHandleClose()}
          show={this.state.deleteShow}
          id={this.props.property._id}
        />
          
      </div>
    );
  }
}

export default PropertyItem;
