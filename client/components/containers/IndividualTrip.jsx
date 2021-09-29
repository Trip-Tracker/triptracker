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
      <p className='tripText'>{props.location}: {props.date}</p>
      {/* This trip was on: {props.currentTrip.date} */}

      <div className='buttonContainer'>
      <Button       
        id="edittrip"
        fullWidth
        variant="contained"
        className={classes.btn}
      >
       
        Add Location
      </Button>
      </div>
      <div className='buttonContainer'>
      <Button       
        id="edittrip"
        fullWidth
        variant="contained"
        className={classes.btn}
      >
        Delete Trip
      </Button>
      </div>
    </div>
  );
}

export default IndividualTrip;
// export default connect(mapStateToProps, null)(IndividualTrip);