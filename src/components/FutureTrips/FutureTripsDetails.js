import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateFutureTrips from "./UpdateFutureTrips";

class FutureTripsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      // we need the initial "specs" array to avoid an error with ".map()"
      //   FutureTripsList: [],
    };
  }

  // React will call "componentDidMount()" automatically when PhoneDetails loads
  componentDidMount() {
    console.log(" = == = = =", this.props.match.params);
    const { params } = this.props.match;

    axios
      .get(
        `http://localhost:3001/futuretrips/${params.futureTripsId}`,
        this.state
      )
      .then((responseFromApi) => {
        console.log("this is res: ", responseFromApi);
        this.setState(responseFromApi.data);
      })
      .catch((err) => console.log(err));
  }

  showEditForm() {
    this.setState({ showEdit: true });
  }

  render() {
    // console.log('state: ', this.state);
    const { _id, expectedDate, eventLocation, notes } = this.state;
    return (
      <section>
        {this.state.showEdit ? (
          <UpdateFutureTrips theFutureTrips={this.state} {...this.props} />
        ) : (
          <section>
            <h1> Future Trip Details! </h1>
            <h2> {eventLocation} </h2>
            <h3>Expected Date: {expectedDate}</h3>
            <h3>Notes: {notes}</h3>

            {/* {this.showEditForm()} */}
            <button onClick={() => this.showEditForm()}>
              Edit Future Trip
            </button>
            {/* <button onClick={() => this.deleteItinerary()}>Delete Itinerary</button> */}
          </section>
        )}

        <Link to={"/futuretrips"}>View Your Future Trips</Link>
      </section>
    );
  }
}

export default FutureTripsDetails;