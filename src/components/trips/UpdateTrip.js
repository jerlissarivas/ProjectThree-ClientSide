import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class UpdateTrip extends Component {
  constructor(props) {
    super(props);
    const {
      tripName,
      tripType,
      location,
      dates,
      travelType,
      notes,
    } = this.props.theTrip;
    this.state = {
      tripName,
      tripType,
      location,
      dates,
      travelType,
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
          `trips/${this.props.theTrip._id}/update`,
        this.state,
        { withCredentials: true } // FORCE axios to send cookies across domains
      )
      .then((response) => {
        //   instead of using <Redirect /> we use this.props.history.push()
        this.props.history.push("/trips");
      })
      .catch((err) => {
        console.log("Update Trip ERROR", err);
        alert("Sorry! Something went wrong.");
      });
  }

  render() {
    // console.log('0 000 0 0 0 00 0 ',this.props);
    // console.log(" = = = == =", this.state);
    const {
      tripName,
      tripType,
      location,
      dates,
      travelType,
      notes,
    } = this.state;
    return (
      <section>
        <h2>Edit: {tripName} </h2>

        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label> Trip Type: </label>
          <input
            value={tripType}
            onChange={(event) => this.genericSync(event)}
            type="text"
            name="tripType"
          />

          <label> Location: </label>
          <input
            value={location}
            onChange={(event) => this.genericSync(event)}
            type="text"
            name="location"
          />

          <label> Dates: </label>
          <input
            value={dates}
            onChange={(event) => this.genericSync(event)}
            type="text"
            name="dates"
          />

          <label> Travel Type: </label>
          <input
            value={travelType}
            onChange={(event) => this.genericSync(event)}
            type="text"
            name="travelType"
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

export default UpdateTrip;
