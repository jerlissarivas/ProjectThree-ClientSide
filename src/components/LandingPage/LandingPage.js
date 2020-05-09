import React, { Component } from "react";
import TripList from "../trips/TripList";
import { Route, Switch, Link } from "react-router-dom";
import AddTrip from "../trips/AddTrip";
import Signup from "../Authentication/Signup";
import "./LandingPage.css";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <h2 className="welcome-container">
          Don't Trip Up, let us help you plan your next trip!
          <br />
          <br />
          <Signup />
          <br />
          <p className="smaller-font">
            Already have an account?{" "}
            <Link className="smaller-font" to="/Login">
              Log In
            </Link>{" "}
          </p>
        </h2>
      </div>
    );
  }
}

export default LandingPage;
