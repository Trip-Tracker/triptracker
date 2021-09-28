import React, { Component } from "react";
import SimpleMap from "./Map.jsx";
import Test from "./Test.jsx";
import Navigation from "./Navigation.jsx";
import SignIn from "./containers/SignIn.jsx";
function App() {
  return (
    <>
      <Navigation/>
      {/* <div className="graycard">
        <h1>Hello! Please sign in to view your trips.</h1>
        <div className="mapContainer">
          <SimpleMap />
        </div>
        <Test />
      </div> */}
     
      <SignIn/>
      
    </>
  );
}
export default App;
