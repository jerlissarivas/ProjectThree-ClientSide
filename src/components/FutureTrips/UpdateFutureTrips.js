import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class UpdateFutureTrips extends Component {
  constructor(props) {
    super(props);
    const { expectedDate, eventLocation, notes } = this.props.theFutureTrips;
    this.state = {
      expectedDate,
      eventLocation,
      notes,
    };
  }

  // for all fields except images and specs
  genericSync(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    // stop the page refresh
    event.preventDefault();

    // PUT and POST requests receive a 2nd argument: the info to submit
    // (we are submitting the state we've gathered from the form)
    axios
      .post(
        process.env.REACT_APP_SERVER_POINT +
          `futuretrips/${this.props.theFutureTrips._id}/update`,
        this.state,
        { withCredentials: true } // FORCE axios to send cookies across domains
      )
      .then((response) => {
        //   instead of using <Redirect /> we use this.props.history.push()
        this.props.history.push("/futuretrips");
      })
      .catch((err) => {
        console.log("Update FutureTrips ERROR", err);
        alert("Sorry! Something went wrong.");
      });
  }

  render() {
    const { expectedDate, eventLocation, notes } = this.state;
    return (
      <section>
        <h2>Edit: {eventLocation} Trip</h2>

        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label> Date: </label>
          <input
            value={expectedDate}
            onChange={(event) => this.genericSync(event)}
            type="text"
            name="expectedDate"
          />

          <label> Event Location: </label>
          <input
            value={eventLocation}
            onChange={(event) => this.genericSync(event)}
            type="text"
            name="eventLocation"
          />

          <label> Notes: </label>
          <input
            value={notes}
            onChange={(event) => this.genericSync(event)}
            type="text"
            name="notes"
          />

          <button> Save </button>
        </form>
      </section>
    );
  }
}

export default UpdateFutureTrips;
