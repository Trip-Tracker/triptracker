import React from "react";
import { connect } from "react-redux";

import {
  createTripAction
} from "../../actions/actions";
import * as types from "../../actions/actionTypes.js";

import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const mapStateToProps = state => ({
  userId: state.mainReducer.userId,
});

const mapDispatchToProps = (dispatch) => ({
  createNewTrip: (userId, location, date) => {
    console.log('userId:', `${userId}`);
    console.log('location:', `${location}`);
    console.log('date:', `${date}`);
    fetch("/newTrip", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userID: userId, location: location, date: date }),
    })
      .then((res) => res.json())
      .then((newTripRes) => {
        if (newTripRes.message){
          console.log(newTripRes.message);
        } else {
          console.log('Attempting to Create New Trip');
          console.log('updated trip array looks like:', newTripRes);
          dispatch({
            type: types.FETCH_NEW_TRIP,
            payload: newTripRes, // newTripRes should be the trips array with the newly added trip.
          });
        }
      });
  },
});

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#8e0000",
    color: "white",
  },
});

function MakeTrip(props) {
  const classes = useStyles();

  return (
    <div className="graycard">
      <div className="space">
      <TextField
        id="newlocation"
        fullWidth
        label="New Location"
        name="newlocation"
        size="small"
        variant="outlined"
      />
      </div>
      <div className="space">
      <TextField
        id="newdate"
        fullWidth
        label="New Date"
        name="newdate"
        size="small"
        variant="outlined"
      />
      </div>
      <Button
        variant="contained"
        className={classes.btn}
        onClick={() => {
          props.createNewTrip(
            props.userId,
            document.getElementById("newlocation").value,
            document.getElementById("newdate").value
          );
        }}
      >
        Save Trip
      </Button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeTrip);