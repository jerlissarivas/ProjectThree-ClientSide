import React, { Component } from "react";
import TripList from "./trips/TripList";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Your Upcoming Trips:</h1>
        <hr />
        <TripList />
      </div>
    );
  }
}

export default Home;
