import React from "react";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#8e0000",
    color: "white",
  },
});


function TripsContainer() {
  const classes = useStyles();
  return (
    <div className='graycard'>
      {/* <div className="mapContainer">
        <SimpleMap />
      </div> */}

      <Button  variant="contained" className={classes.btn}>New Trip</Button>
    </div>
  );
}

export default TripsContainer;