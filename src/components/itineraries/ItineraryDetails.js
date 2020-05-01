import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateItinerary from "./UpdateItinerary";

class ItineraryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      // we need the initial "specs" array to avoid an error with ".map()"
      //   itineraryList: [],
    };
  }

  // React will call "componentDidMount()" automatically when PhoneDetails loads
  componentDidMount() {
    console.log(" = == = = =", this.props.match.params);
    const { params } = this.props.match;

    axios
      .get(`http://localhost:3001/itinerary/${params.itineraryId}`, this.state)
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
    const { _id, date, eventName, eventLocation } = this.state;
    return (
      <section>
        {this.state.showEdit ? (
          <UpdateItinerary theItinerary={this.state} {...this.props} />
        ) : (
          <section>
            <h1> Itinerary Details! </h1>
            <h2> {eventName} </h2>
            <h3>Type: {date}</h3>
            <h4>Location: {eventLocation}</h4>

            {/* <ul>
              {specs.map((oneSpec, index) => {
                return <li key={index}> {oneSpec} </li>;
              })}
            </ul> */}

            {/* {this.showEditForm()} */}
            <button onClick={() => this.showEditForm()}>Edit Itinerary</button>
            {/* <button onClick={() => this.deleteItinerary()}>Delete Itinerary</button> */}
          </section>
        )}

        <Link to={"/itinerary"}>View Your Itinerary</Link>
      </section>
    );
  }
}

export default ItineraryDetails;