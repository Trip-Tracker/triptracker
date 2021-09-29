import React from "react";
// import {connect} from 'react-redux';
import SimpleMap from "../Map.jsx";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

//Material UI style hook
const useStyles = makeStyles({
  btn: {
    backgroundColor: "#8e0000",
    color: "white",
  },
});



// const mapStateToProps = state => ({
//   currentTrip: state.mainReducer.currentTrip,
// });

function IndividualTrip(props) {
  const classes = useStyles();

  
  return (
    <div className="graycard">
      <SimpleMap location={props.location}/>
      {/* This was a trip to: {props.currentTrip.location} */}
      This was a trip to: {props.location}
      <br></br>
      {/* This trip was on: {props.currentTrip.date} */}
      This trip was on: {props.date}
      <Button       
        id="edittrip"
        fullWidth
        variant="contained"
        className={classes.btn}
      >
        Edit Trip
      </Button>
      <Button       
        id="edittrip"
        fullWidth
        variant="contained"
        className={classes.btn}
      >
        Delete Trip
      </Button>
    </div>
  );
}

export default IndividualTrip;
// export default connect(mapStateToProps, null)(IndividualTrip);