import React, { Component } from "react";
import axios from "axios";
// import AddTrip from "./AddTrip";

class TravelInfo extends Component {
  state = {
    travelInfo: [],
  };

  // here we call the function to make the axios call which gets all the travel info from the db, we must do this prior to the render in order to get the needed information so that we can use that information to display something in the component allowing axios to make its request and receive its response.
  componentDidMount() {
    this.gettravelInfo();
  }

  // this function will pass down to the add travel child component which will allow us to update the state for the this (the parent) component and display the updated full list of trips
  newTravelAdded = () => {
    this.gettravelInfo();
  };

  // after we delete the travel from the db we will need to then call the function which gets all the travel info from the db in order to update the list with the deleted travel missing.
  deleteTravel = (travelId) => {
    axios
      .post(process.env.REACT_APP_SERVER_POINT + `travel/${travelId}/delete`)
      .then((messageAfterDeletingTravel) => {
        console.log({ messageAfterDeletingTravel });
        this.gettravelInfo();
      })
      .catch((err) => console.log({ err }));
  };

  // this function will be used in order to get the full list of travel as well as update the state whenever we make a change like adding or deleting a travel.
  gettravelInfo = () => {
    axios
      .get(process.env.REACT_APP_SERVER_POINT + "travel")
      .then((travelInfoFromAPI) => {
        this.setState({ travelInfo: travelInfoFromAPI.data });
      })
      .catch((err) => console.log({ err }));
  };

  showTravel = () => {
    return this.state.travelInfo.length === 0 ? (
      <h2>No Travel Information to Display</h2>
    ) : (
      this.state.travelInfo.map((travel, i) => {
        return (
          <div key={i}>
            <h2>Airline: {travel.airline}</h2>
            <h3>Flight Number: {travel.flightNumber}</h3>

            <button onClick={() => this.deleteTravel(travel._id)}>
              Delete
            </button>
          </div>
        );
      })
    );
  };

  render() {
    return (
      <div>
        {/* <AddTravel updateState={this.newTravelAdded} /> */}
        <hr />
        {this.state.travelInfo && this.showTravel()}
      </div>
    );
  }
}

export default TravelInfo;
