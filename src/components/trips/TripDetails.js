import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateTrip from "./UpdateTrip";
import TripList from "./TripList";

class TripDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      // we need the initial "specs" array to avoid an error with ".map()"
      //   tripList: [],
    };
  }

  // React will call "componentDidMount()" automatically when PhoneDetails loads
  componentDidMount() {
    console.log(" = == = = =", this.props.match.params);
    const { params } = this.props.match;

    axios
      .get(`http://localhost:3001/trips/${params.tripId}`, this.state)
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
    const { _id, tripName, tripType, location, dates, travelType } = this.state;
    return (
      <section>
        {this.state.showEdit ? (
          <UpdateTrip theTrip={this.state} {...this.props} />
        ) : (
          <section>
            <p> This is details page! </p>
            <h2> {tripName} </h2>
            <h3>Type: {tripType}</h3>
            <h4>Location: {location}</h4>
            <h4>Dates: {dates}</h4>
            <h4>Travel Type: {travelType}</h4>

            {/* <ul>
              {specs.map((oneSpec, index) => {
                return <li key={index}> {oneSpec} </li>;
              })}
            </ul> */}

            {/* {this.showEditForm()} */}
            <button onClick={() => this.showEditForm()}>Edit Trip</button>
            <button onClick={() => this.deletePhone(_id)}>Delete Trip</button>
          </section>
        )}

        <Link to={"/trips"}>View Your Trips</Link>
      </section>
    );
  }
}

export default TripDetails;
