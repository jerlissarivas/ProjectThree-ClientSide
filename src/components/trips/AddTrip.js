import React, { Component } from "react";
import axios from "axios";
import "./Trips.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

class AddTrip extends Component {
  state = {
    tripName: "",
    tripType: "",
    location: "",
    dates: "",
    travelType: "",
  };

  submit = (event) => {
    event.preventDefault();

    axios
      .post(process.env.REACT_APP_SERVER_POINT + "trips", this.state)
      .then((newlyCreatedTripFromAPI) => {
        console.log({ newlyCreatedTripFromAPI });

        this.setState(
          {
            tripName: "",
            tripType: "",
            location: "",
            dates: "",
            travelType: "",
          },
          this.props.history.push("/trips")
        );
        // this.props.history.push("/trips");
      })
      .catch((err) => console.log({ err }));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.submit}>
          <label>Trip Name:</label>
          <br />
          <input
            type="text"
            name="tripName"
            value={this.state.tripName}
            onChange={this.handleChange}
          />
          <br />
          <label>Trip Type:</label>
          <br />
          <input
            type="text"
            name="tripType"
            value={this.state.tripType}
            onChange={this.handleChange}
          />
          <br />
          <label>Location:</label>
          <br />
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <br />
          <label>Dates:</label>
          <br />
          <input
            type="text"
            //type="date"
            name="dates"
            value={this.state.dates}
            onChange={this.handleChange}
          />
          <br />
          <label>Travel Type:</label>
          <br />
          <input
            type="text"
            name="travelType"
            value={this.state.travelType}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Plan Trip" />
        </form>
      </div>
    );
  }
}

export default AddTrip;
