import React, { Component } from "react";
import TripList from "./trips/TripList";
import { Route, Switch, Link } from "react-router-dom";
import AddTrip from "./trips/AddTrip";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Plan your next trip!</h1>
        <AddTrip />
        <hr />
        <Link to="/trips">View Your Trips</Link>
      </div>
    );
  }
}

export default Home;
