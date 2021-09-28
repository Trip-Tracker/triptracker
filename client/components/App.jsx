import React, { Component } from "react";
import SimpleMap from "./Map.jsx";
import Test from "./Test.jsx";
import Navigation from "./Navigation.jsx";

function App() {
  return (
    <>
      <h1>Hello successfully Bundled!!!!</h1>
      <div className="mapContainer">
        <SimpleMap />
      </div>
      <Test />
    </>
  );
}
export default App;
