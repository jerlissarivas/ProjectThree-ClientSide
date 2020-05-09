import React, { Component } from "react";
import TripList from "../trips/TripList";
import { Route, Switch, Link } from "react-router-dom";
import AddTrip from "../trips/AddTrip";
import AddFutureTrips from "../FutureTrips/AddFutureTrips";
import OutlinedCard from "../trips/OutlinedCard";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Plan your next trip!</h1>
        <AddTrip {...this.props} />
        <hr />
        <AddFutureTrips />
        <Link className="newbutton" to="/trips">
          PLANNED TRIPS
        </Link>
        <Link className="newbutton" to="/futuretrips">
          FUTURE TRIPS
        </Link>
        <OutlinedCard />
      </div>
    );
  }
}

export default Home;
