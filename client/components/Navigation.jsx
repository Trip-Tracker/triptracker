import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { TTNavBar } from "../css/MatUIStyles";
import {connect} from 'react-redux';
import { updateTrip } from "../actions/actions";
import * as types from "../actions/actionTypes.js";

const mapDispatchToProps = dispatch => ({
  setCurrentTripToNull: () => {
    dispatch(updateTrip(null));
  }
})

//material ui styling
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    '&:hover': {
      cursor: "pointer",
      color: "#BC0000"
    }
  },
}));

function Navigation(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TTNavBar>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} color="inherit" onClick={props.setCurrentTripToNull}>
              TripTracker
            </Typography>
            <Button color="inherit">{props.page}</Button>
          </Toolbar>
        </TTNavBar>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(Navigation);
