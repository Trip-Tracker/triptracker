import React from "react";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import {connect} from 'react-redux';
import { updateTrip, createTrip } from "../../actions/actions";
import * as types from "../../actions/actionTypes.js";

const mapStateToProps = state => ({
  tripsArray: state.mainReducer.tripsArray,
  userEmail: state.mainReducer.userEmail
});

const mapDispatchToProps = dispatch => ({
  selectTrip: (trip) => {
    dispatch(updateTrip(trip));
  },
  createTrip: () => {
    dispatch(createTrip());
  },
});

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#8e0000",
    color: "white",
  },
  trips: {
    backgroundColor: "#FFFFFF",
    marginBottom: '10px'
  }
});


function TripsContainer(props) {
  const classes = useStyles();

  let tripsToRender = [];
  for (let i = 0; i < props.tripsArray.length; i++) {
    const trip = props.tripsArray[i]
    tripsToRender.push(
      <Button
        fullWidth 
        variant="contained"
        size="large"
        className={classes.trips}
        key = {`trip${i}`}
        onClick={(e) => props.selectTrip(trip)}
      >
        {props.tripsArray[i].location} : {props.tripsArray[i].date}
      </Button>
    );
  }
  return (
    <div className='graycard'>
      {/* <div className="mapContainer">
        <SimpleMap />
      </div> */}
      <div id="welcomemessage"><h2><span id="welcomeblack">Welcome,</span> <span id="welcomered">{props.userEmail}</span><span id="welcomeblack">!</span></h2></div>
      <h3> Trips </h3>
    
      <div className='tripsContainer'>
        {tripsToRender}
      </div>

      <Button
        fullWidth
        variant="contained"
        className={classes.btn}
        onClick={() => props.createTrip()}
      >
        New Trip
      </Button>
    </div>
  );
}



export default connect(mapStateToProps, mapDispatchToProps)(TripsContainer);