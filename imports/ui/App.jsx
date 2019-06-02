import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
 
import { Properties } from '../api/properties';

import Header from './components/Header';
import Home from './components/Home';
import Property from './components/Property';


class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="main-app">
          {this.props.currentUser ? <Property properties={this.props.properties} currentUserId={this.props.currentUser._id}/> : <Home />}
          {/* <Home /> */}
          {/* <Property properties={this.props.properties} propertyNum={this.props.numberOfProperties} /> */}
        </div>
        
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('properties');
  return {
    properties: Properties.find({}, { sort: { createdAt: -1 } }).fetch(),
    numberOfProperties: Properties.find({}).count(),
    currentUser: Meteor.user()
  };
})(App);

// export default App;