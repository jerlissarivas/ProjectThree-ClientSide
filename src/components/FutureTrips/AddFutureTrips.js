import React, { Component } from "react";
import axios from "axios";

class AddFutureTrips extends Component {
  state = {
    expectedDate: "",
    eventLocation: "",
    notes: "",
  };

  submit = (event) => {
    event.preventDefault();

    axios
      .post(process.env.REACT_APP_SERVER_POINT+"futuretrips", this.state)
      .then((newlyCreatedFutureTripsFromAPI) => {
        console.log(newlyCreatedFutureTripsFromAPI);
        console.log({ newlyCreatedFutureTripsFromAPI });

        this.props.updateState();
        this.setState({
          expectedDate: "",
          eventLocation: "",
          notes: "",
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
          <label>Location:</label>
          <input
            type="text"
            name="eventLocation"
            value={this.state.eventLocation}
            onChange={this.handleChange}
          />
          <br />
          <label>Dates:</label>
          <input
            type="text"
            name="expectedDate"
            value={this.state.expectedDate}
            onChange={this.handleChange}
          />
          <br />

          <input type="submit" value="Add to your Future Trips" />
        </form>
      </div>
    );
  }
}

export default AddFutureTrips;
