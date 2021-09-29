import React from "react";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#8e0000",
    color: "white",
  },
});

function MakeTrip(){
    const classes = useStyles();

return (
  <div className="graycard">
  <h1> Rendered Make Trip </h1> 
  <Button variant="contained" className={classes.btn}>Save Trip</Button>
  </div>
  );
}

export default MakeTrip;