import React, { Component } from "react";
import axios from "axios";

class AddTravel extends Component {
  state = {
    airline: "",
    flightNumber: "",
  };

  submit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/travel", this.state)
      .then((newlyCreatedTravelFromAPI) => {
        console.log({ newlyCreatedTravelFromAPI });

        this.props.updateState();
        this.setState({ airline: "", flightNumber: "" });
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
          <label>Airline:</label>
          <input
            type="text"
            name="airline"
            value={this.state.airline}
            onChange={this.handleChange}
          />

          <label>Flight Number:</label>
          <input
            type="text"
            name="flightNumber"
            value={this.state.flightNumber}
            onChange={this.handleChange}
          />

          <input type="submit" value="Add Travel Information" />
        </form>
      </div>
    );
  }
}

export default AddTravel;
