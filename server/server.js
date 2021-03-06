const express = require("express");
const { restart } = require("nodemon");
const app = express();
const path = require("path");
const userController = require("./controllers/userControllers");
const tripController = require("./controllers/tripController");
const locationController = require("./controllers/locationController");




//* handle parsing request body
app.use(express.json());
//this parses url encoded body content from incomming requests ans place it in req.body....
app.use(express.urlencoded({ extended: true }));

// statically serve everything in the build folder on the route '/build'
app.use("/build", express.static(path.join(__dirname, "../build")));
// serve index.html on the route '/'
app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

/*
   User Routes Below
*/

app.post("/createUser", userController.createUser, (req, res) => {
  return res.status(201).send('User Successfully Created');
});

app.post("/verifyUser", userController.verifyUser, tripController.getTrips, (req, res) => {
  return res.status(201).json({user: res.locals.user, trips: res.locals.trips});
});

/*
   Trip Routes Below
*/

app.post("/getTrips", tripController.getTrips, (req, res) => {
  return res.status(200).json(res.locals.trips);
})

app.post("/newTrip", tripController.createTrip, tripController.getTrips, (req, res) => {
  return res.json(res.locals.trips);
});

/*
   Location Routes Below
*/

app.post("/getLocations", locationController.getLocations, (req, res) => {
  res.json(res.locals.locations);
});

app.post("/newLocation", locationController.newLocation, locationController.getLocations, (req, res) => {
  res.json(res.locals.locations);
});



//this catches any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

//configure global error handler:
app.use((err, req, res, next) => {
  const defaultError = {
    log: "Unknown Middleware error",
    status: 400,
    message: { err: "Global Default Error Message: An error occured" },
  };
  const errObj = Object.assign(defaultError, err);
  console.log("Error Message: ", errObj.message);
  return res.status(errObj.status).json(errObj);
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
