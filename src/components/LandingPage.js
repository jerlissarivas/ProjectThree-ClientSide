import React, { Component } from "react";
import TripList from "./trips/TripList";
import { Route, Switch, Link } from "react-router-dom";
import AddTrip from "./trips/AddTrip";
import Signup from "./Authentication/Signup";

class Home extends Component {
  render() {
    return (
      <div>
        <Signup />
        <h1>Let's Start Planning Your Next Trip!</h1>
      </div>
    );
  }
}

export default Home;
