import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Properties = new Mongo.Collection("properties");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("properties", function propertiesPublication() {
    return Properties.find({
      $or: [{ owner: this.userId }]
    });
  });
}


Meteor.methods({
  // Endpoint for inserting new property. call "Meteor.call('properties.insert', propertyText)" to use api
  "properties.insert"(text) {
    check(text, String);

    // Make sure the user is logged in before inserting a task
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    Properties.insert({
      text,
      createdAt: new Date(),
      owner: this.userId
    });
  },


  // Endpoint for deleting a property. call "Meteor.call('properties.remove', propertyId)" to use api
  "properties.remove"(propertyId) {
    check(propertyId, String);

    const properties = Properties.findOne(propertyId);
    if (properties.owner !== this.userId) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error("not-authorized");
    }

    Properties.remove(propertyId);
  },


  // Endpoint for updating a property. call "Meteor.call('properties.update', propertyId, propertyText)" to use api
  "properties.update"(propertyId, text) {
    check(propertyId, String);
    check(text, String);

    const properties = Properties.findOne(propertyId);
    if (properties.owner !== this.userId) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error("not-authorized");
    }

    Properties.update(propertyId, { $set: { text: text } });
  }
});
