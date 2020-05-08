import React, { Component } from "react";
import TripList from "./trips/TripList";
import { Route, Switch, Link } from "react-router-dom";
import AddTrip from "./trips/AddTrip";
import AddFutureTrips from "./FutureTrips/AddFutureTrips";
import OutlinedCard from "./trips/OutlinedCard";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Plan your next trip!</h1>
        <AddTrip {...this.props} />
        <hr />
        <AddFutureTrips />
        <Link to="/futuretrips">View Your Future Trips</Link>
        <Link to="/trips">View Your Trips</Link>
        <OutlinedCard />
      </div>
    );
  }
}

export default Home;
