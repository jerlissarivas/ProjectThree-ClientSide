import React, { Component } from "react";
import axios from "axios";

class AddItinerary extends Component {
  state = {
    date: "",
    eventName: "",
    eventLocation: "",
  };

  submit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/itinerary", this.state)
      .then((newlyCreatedItineraryFromAPI) => {
        console.log({ newlyCreatedItineraryFromAPI });

        this.props.updateState();
        this.setState({
          date: "",
          eventName: "",
          eventLocation: "",
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
          <label>Date:</label>
          <input
            type="text"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <br />
          <label>Event Name:</label>
          <input
            type="text"
            name="eventName"
            value={this.state.eventName}
            onChange={this.handleChange}
          />
          <br />
          <label>Event Location:</label>
          <input
            type="text"
            name="eventLocation"
            value={this.state.eventLocation}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Add to your Itinerary" />
        </form>
      </div>
    );
  }
}

export default AddItinerary;
