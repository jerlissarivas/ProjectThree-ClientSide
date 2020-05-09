import React, { Component } from "react";
import TripList from "../trips/TripList";
import { Route, Switch, Link } from "react-router-dom";
import AddTrip from "../trips/AddTrip";
import Signup from "../Authentication/Signup";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <Signup className="welcome-container" />
        <h1>Let's Start Planning Your Next Trip!</h1>
      </div>
    );
  }
}

export default LandingPage;
