import React, { Component } from "react";
import axios from "axios";
import AddFutureTrips from "./AddFutureTrips";
import { Route, Switch, Link } from "react-router-dom";

class FutureTripsList extends Component {
  state = {
    futureTripsList: [],
  };

  // here we call the function to make the axios call which gets all the future trips from the db, we must do this prior to the render in order to get the needed information so that we can use that information to display something in the component allowing axios to make its request and receive its response.
  componentDidMount() {
    this.getFutureTripsList();
  }

  // this function will pass down to the add FutureTrips child component which will allow us to update the state for the this (the parent) component and display the updated full list of trips
  newFutureTripsAdded = () => {
    this.getFutureTripsList();
  };

  // after we delete the trip from the db we will need to then call the function which gets all the trips from the db in order to update the list with the deleted trip missing.
  deleteFutureTrips = (futureTripsId) => {
    axios
      .post(
        process.env.REACT_APP_SERVER_POINT +
          `futuretrips/${futureTripsId}/delete`
      )
      .then((messageAfterDeletingFutureTrips) => {
        console.log({ futureTripsId, messageAfterDeletingFutureTrips });
        this.getFutureTripsList();
      })
      .catch((err) => console.log({ err }));
  };

  // this function will be used in order to get the full list of FutureTrips as well as update the state whenever we make a change like adding or deleting a FutureTrips.
  getFutureTripsList = () => {
    axios
      .get(process.env.REACT_APP_SERVER_POINT + "futuretrips")
      .then((futureTripsListFromAPI) => {
        this.setState({ futureTripsList: futureTripsListFromAPI.data });
      })
      .catch((err) => console.log({ err }));
  };

  showFutureTrips = () => {
    return this.state.futureTripsList.length === 0 ? (
      <h2>No Future Trips Details to Display</h2>
    ) : (
      this.state.futureTripsList.map((futureTrips, i) => {
        return (
          <div key={i}>
            <h2>
              <Link to={`/futuretrips/${futureTrips._id}`}>{futureTrips.eventLocation}</Link>
            </h2>
            {/* <h2>{futureTrips.eventLocation}</h2> */}
            <h3>Date: {futureTrips.expectedDate}</h3>

            <button onClick={() => this.deleteFutureTrips(futureTrips._id)}>
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
        <hr />
        {this.state.futureTripsList && this.showFutureTrips()}
        <hr />
        <AddFutureTrips {...this.props} />
      </div>
    );
  }
}

export default FutureTripsList;
