import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import TripList from "./components/trips/TripList";
// import TripsCard from "./components/trips/TripsCard";
import TripDetails from "./components/trips/TripDetails";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trips" component={TripList} />
        <Route path="/tripdetails/:phoneId" component={TripDetails} />
      </Switch>
    </div>
  );
}

export default App;
