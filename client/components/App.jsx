import React from "react";
import {connect} from 'react-redux';

import SimpleMap from "./Map.jsx";
import Test from "./Test.jsx";
import Navigation from "./Navigation.jsx";
import SignIn from "./containers/SignIn.jsx";
import IndividualTrip from "./containers/IndividualTrip.jsx";
import TripsContainer from "./containers/TripsContainer.jsx";
import MakeTrip from "./containers/MakeTrip.jsx"


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const mapStateToProps = state => ({
  isSignedIn: state.mainReducer.isSignedIn,
  currentTrip: state.mainReducer.currentTrip,
});


function App(props) {
  
  if (!props.isSignedIn){
    return (
      <div id="appContainer">
        <Navigation page='Login'/>     
        <SignIn/>       
      </div>
    );
  }

  if (props.currentTrip === null) {
    return (
      <div>
        <Router>
          
          <Navigation page='Trips'/>
          <TripsContainer/>

          <Switch>
          </Switch>
        </Router>
      </div>
      )
    }

    if (props.currentTrip === '_newtrip_') {
      return (
        <div>
          <Navigation page='Creating Trip'/>
          <MakeTrip/>
        </div>
      )
    }
  return (
    <div>
      <Navigation page={props.currentTrip.location}/>
      <IndividualTrip
        location = {props.currentTrip.location} // comment out if reverting to Redux
        date = {props.currentTrip.date} // comment out if reverting to Redux
      />
    </div>
  )

  }
export default connect(mapStateToProps, null)(App);
