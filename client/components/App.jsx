import React from "react";
import SimpleMap from "./Map.jsx";
import Test from "./Test.jsx";
import Navigation from "./Navigation.jsx";
import SignIn from "./containers/SignIn.jsx";
import {connect} from 'react-redux';
import TripsContainer from './containers/TripsContainer.jsx';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const mapStateToProps = state => ({
  isSignedIn: state.mainReducer.isSignedIn,
});

function App(props) {
  
  if (!props.isSignedIn){
    return (
      <>
        <Navigation/>     
        <SignIn/>       
      </>
    );
  } else {
    return (
      <>
        <Router>
          
          <Navigation/>
          <TripsContainer/>

          <Switch>
          </Switch>
        </Router>
      </>
      )
    }
  }
export default connect(mapStateToProps, null)(App);
