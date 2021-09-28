import React from "react";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  btn: {
    backgroundColor: "#8e0000",
    color: "white",
  },
});

function SignIn() {
  const classes = useStyles();

  return (
   
      <div className="graycard">
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
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth id="SignInButton" variant="contained">
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
                  New User
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>

  );
}

export default SignIn;