import React, { Component } from "react";
import axios from "axios";
import AddTrip from "./AddTrip";

class TripList extends Component {
  state = {
    tripList: [],
  };

  // here we call the function to make the axios call which gets all the trips from the db, we must do this prior to the render in order to get the needed information so that we can use that information to display something in the component allowing axios to make its request and receive its response.
  componentDidMount() {
    this.getTripList();
  }

  // this function will pass down to the add trip child component which will allow us to update the state for the this (the parent) component and display the updated full list of trips
  newTripAdded = () => {
    this.getTripList();
  };

  // after we delete the trip from the db we will need to then call the function which gets all the trips from the db in order to update the list with the deleted trip missing.
  deleteTrip = (tripId) => {
    axios
      .delete(`http://localhost:3001/trips/${tripId}/delete`)
      .then((messageAfterDeletingTrip) => {
        console.log({ messageAfterDeletingTrip });
        this.getTripList();
      })
      .catch((err) => console.log({ err }));
  };

  // this function will be used in order to get the full list of trips as well as update the state whenever we make a change like adding or deleting a trip.
  getTripList = () => {
    axios
      .get("http://localhost:3001/trips")
      .then((tripListFromAPI) => {
        this.setState({ tripList: tripListFromAPI.data });
      })
      .catch((err) => console.log({ err }));
  };

  showTrips = () => {
    return this.state.tripList.length === 0 ? (
      <h2>No Trips to Display</h2>
    ) : (
      this.state.tripList.map((trip, i) => {
        return (
          <div key={i}>
            <h2>Trip Name: {trip.tripName}</h2>
            <h3>Type: {trip.tripType}</h3>
            <h4>Location: {trip.location}</h4>
            <h4>Dates: {trip.dates}</h4>
            <h4>Travel Type: {trip.travelType}</h4>

            {/* <h4>Location: {trip.complete ? "Yes" : "No"}</h4> */}
            <button onClick={() => this.deleteTrip(trip._id)}>Delete</button>
          </div>
        );
      })
    );
  };

  render() {
    return (
      <div>
        <AddTrip updateState={this.newTripAdded} />
        <hr />
        {this.showTrips()}
      </div>
    );
  }
}

export default TripList;
