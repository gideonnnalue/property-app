import React, { Component } from "react";
import PropertyItem from "./PropertyItem";

import DeleteModal from "./utils/DeleteModal";
import EditModal from "./utils/EditModal";
import { Properties } from "../../api/properties";

class Property extends Component {
  state = {
    items: [1, 2, 3, 4, 5],
    deleteShow: false,
    editShow: false,
    newText: "",
  };

  newTextHandler(e) {
    this.setState({ newText: e.target.value });
  }

  submitPropertyHandler(event) {
    event.preventDefault();

    if (this.state.newText.trim() === "") {
        alert("cannot be empty");
        return;
    }

    let text = this.state.newText;

    Meteor.call("properties.insert", text);

    this.setState({ newText: "" });
  }

  deleteItem(a) {
    const i = this.state.items;
    i.slice(a, a + 1);
  }

  render() {
    let propertyNum = 0;

    const items = this.props.properties.map((item, i) => {
      if (item.owner == this.props.currentUserId) {
          propertyNum++
        return (
          <div key={item._id}>
            <PropertyItem
              deleteHandleShow={() => this.deleteHandleShow()}
              editHandleShow={() => this.editHandleShow()}
              index={i}
              property={item}
            />
          </div>
        );
      }
      return [];
    });
    return (
      <div className="container section-property">
        <div className="row justify-content-md-center">
          <div className="col-sm-10 col-xl-8">
            <div className="property-box">
              <div className="property-box__heading">
                <img
                  src="/img/logo.png"
                  alt=""
                  className="property-box__logo"
                />
                <h1 className="property-box__heading mt-3 pl-3">
                  User properties{" "}
                  <span className="ml-3">{propertyNum}</span>
                </h1>
              </div>
              <div className="property-box__text-box mb-4">
                <form onSubmit={e => this.submitPropertyHandler(e)}>
                  <input
                    type="text"
                    className="property-box__input"
                    placeholder="Enter new property"
                    value={this.state.newText}
                    onChange={e => this.newTextHandler(e)}
                  />
                  <button className="property-box__submit btns btns--small-primary">
                    +
                  </button>
                </form>
              </div>
              <div className="property-box__property-list">
                {items}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Property;
