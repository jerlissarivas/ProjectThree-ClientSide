import React, { Component } from "react";
import axios from "axios";
import AddItinerary from "./AddItinerary";
import { Route, Switch, Link } from "react-router-dom";

class ItineraryList extends Component {
  state = {
    itineraryList: [],
  };

  // here we call the function to make the axios call which gets all the Itineraries from the db, we must do this prior to the render in order to get the needed information so that we can use that information to display something in the component allowing axios to make its request and receive its response.
  componentDidMount() {
    this.getItineraryList();
  }

  // this function will pass down to the add Itinerary child component which will allow us to update the state for the this (the parent) component and display the updated full list of trips
  newItineraryAdded = () => {
    this.getItineraryList();
  };

  // after we delete the trip from the db we will need to then call the function which gets all the trips from the db in order to update the list with the deleted trip missing.
  deleteItinerary = (itineraryId) => {
    axios
      .post(`http://localhost:3001/itinerary/${itineraryId}/delete`)
      .then((messageAfterDeletingItinerary) => {
        console.log({ messageAfterDeletingItinerary });
        this.getItineraryList();
      })
      .catch((err) => console.log({ err }));
  };

  // this function will be used in order to get the full list of Itinerarys as well as update the state whenever we make a change like adding or deleting a Itinerary.
  getItineraryList = () => {
    axios
      .get("http://localhost:3001/itinerary")
      .then((itineraryListFromAPI) => {
        this.setState({ itineraryList: itineraryListFromAPI.data });
      })
      .catch((err) => console.log({ err }));
  };

  showItinerary = () => {
    return this.state.itineraryList.length === 0 ? (
      <h2>No Trips to Display</h2>
    ) : (
      this.state.itineraryList.map((itinerary, i) => {
        return (
          <div key={i}>
            <h2>
              <Link to={`/itinerary/${itinerary._id}`}>{itinerary.itineraryName}</Link>
            </h2>
            {/* <h2>{itinerary.itineraryName}</h2> */}
            <h3>Type: {itinerary.itineraryType}</h3>
            <h4>Location: {trip.location}</h4>
            <h4>Dates: {trip.dates}</h4>
            <h4>Travel Type: {trip.travelType}</h4>

            <button onClick={() => this.deleteTrip(trip._id)}>Delete</button>
          </div>
        );
      })
    );
  };

  render() {
    return (
      <div>
        {/* <AddTrip updateState={this.newTripAdded} /> */}
        <hr />
        {this.state.tripList && this.showTrips()}
      </div>
    );
  }
}

export default TripList;
