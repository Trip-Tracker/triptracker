import React from "react";
import {connect} from 'react-redux';
import SimpleMap from "../Map.jsx";

const mapStateToProps = state => ({
  currentTrip: state.mainReducer.currentTrip,
});

function IndividualTrip(props) {
  return (
    <div className="graycard">
      <SimpleMap/>
      This was a trip to: {props.currentTrip.location}
      <br></br>
      This trip was on: {props.currentTrip.date}
    </div>
  );
}

export default connect(mapStateToProps, null)(IndividualTrip);