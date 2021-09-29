import React from "react";
import {connect} from 'react-redux';

import SimpleMap from "./Map.jsx";
import Test from "./Test.jsx";
import Navigation from "./Navigation.jsx";
import SignIn from "./containers/SignIn.jsx";
import IndividualTrip from "./containers/IndividualTrip.jsx";
import TripsContainer from './containers/TripsContainer.jsx';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const mapStateToProps = state => ({
  isSignedIn: state.mainReducer.isSignedIn,
  currentTrip: state.mainReducer.currentTrip
});


function App(props) {
  
  if (!props.isSignedIn){
    return (
      <div>
        <Navigation page='Login Page'/>     
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

  return (
    <div>
      <Navigation page={props.currentTrip.location}/>
      <IndividualTrip/>
    </div>
  )

  }
export default connect(mapStateToProps, null)(App);
