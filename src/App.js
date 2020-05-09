import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import TripList from "./components/trips/TripList";
import ButtonAppBar from "./components/Navbar/ButtonAppBar";
import TripDetails from "./components/trips/TripDetails";
import Signup from "./components/Authentication/Signup";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Authentication/Login";
import UpdateTrip from "./components/trips/UpdateTrip";
import AddFutureTrips from "./components/FutureTrips/AddFutureTrips";
import FutureTripsList from "./components/FutureTrips/FutureTripsList";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/trips" component={TripList} />
        <Route exact path="/trips/:tripId" component={TripDetails} />
        <Route exact path="/futuretrips" component={FutureTripsList} />
        <Route
          exact
          path="/tripdetails/:tripId/update"
          component={UpdateTrip}
        />
      </Switch>
    </div>
  );
}

export default App;
