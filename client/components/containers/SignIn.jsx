import React from "react";
//Redux Imports:
import {
  updateUsernameEntryAction,
  updatePasswordEntryAction,
  attemptSignInAction,
} from "../../actions/actions";
import * as types from "../../actions/actionTypes.js";
import {connect} from 'react-redux'
// import logo from '../../assets/logo.png'

//MaterialUI Imports
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

//Material UI style hook
const useStyles = makeStyles({
  btn: {
    backgroundColor: "#8e0000",
    color: "white",
  },
});

//Redux Mapping
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.mainReducer.isSignedIn,
    usernameEntry: state.mainReducer.usernameEntry,
    passwordEntry: state.mainReducer.passwordEntry,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateUsernameEntry: (entry) => {
    console.log(entry); //should console.log for every key pressed on username input | (10:13 PM, 08/18/21)
    dispatch(updateUsernameEntryAction(entry));
  },
  updatePasswordEntry: (entry) => {
    console.log(entry);
    dispatch(updatePasswordEntryAction(entry));
  },
  attemptSignIn: (email, password) => {
    fetch("/verifyUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((signInRes) => {
        if (signInRes.message){
          console.log(signInRes.message);
        } else {
          console.log('Attempting Sign In');
          dispatch({
            type: types.ATTEMPT_SIGN_IN,
            payload: signInRes,
          });
        }
      });
  },
});


//COMPONENT
function SignIn(props) {
  const classes = useStyles();

  return (
   
      <div className="graycard">
        {/* <img src={logo} className='logo'></img> */}
        <Container maxWidth="xs">
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="lUser"
                      fullWidth
                      label="Username"
                      name="username"
                      size="small"
                      variant="outlined"
                      onChange={(ele) => {
                        props.updateUsernameEntry(ele.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="lPass"
                      fullWidth
                      label="Password"
                      name="password"
                      size="small"
                      type="password"
                      variant="outlined"
                      onChange={(ele) => {
                        props.updatePasswordEntry(ele.target.value);
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth id="SignInButton" variant="contained" onClick={() => {
                      props.attemptSignIn(
                        props.usernameEntry,
                        props.passwordEntry
                      );
                    }}>
                  Sign in
                </Button>

                <Button
                  //   color="primary"
                  id="createUser"
                  className="createUser"
                  fullWidth
                  variant="contained"
                  className={classes.btn}
                  //   onClick={this.createUserClick}
                >
                  Create Account
                </Button>
              </Grid>
              <Grid item xs={12}>
                <hr></hr>
                <a className='forgotPassword'>Forgot Password?</a>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>

  );
}

// export default SignIn;
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);