import React, { Component } from "react";
import axios from "axios";

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
      .post("http://localhost:3001/trips", this.state)
      .then((newlyCreatedTripFromAPI) => {
        console.log({ newlyCreatedTripFromAPI });

        this.props.updateState();
        this.setState({
          tripName: "",
          tripType: "",
          location: "",
          dates: "",
          travelType: "",
        });
      })
      .catch((err) => console.log({ err }));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <label>Trip Name:</label>
          <input
            type="text"
            name="tripName"
            value={this.state.tripName}
            onChange={this.handleChange}
          />

          <label>Trip Type:</label>
          <input
            type="text"
            name="tripType"
            value={this.state.tripType}
            onChange={this.handleChange}
          />

          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          />

          <label>Dates:</label>
          <input
            type="text"
            name="dates"
            value={this.state.dates}
            onChange={this.handleChange}
          />

          <label>Travel Type:</label>
          <input
            type="text"
            name="travelType"
            value={this.state.travelType}
            onChange={this.handleChange}
          />

          <input type="submit" value="Add Trip" />
        </form>
      </div>
    );
  }
}

export default AddTrip;
