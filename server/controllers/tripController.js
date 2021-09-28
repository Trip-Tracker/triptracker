const path = require("path");
const db = require(path.resolve(__dirname, "../../database/pool.js"));

const tripController = {};

tripController.getTrips = async (req, res, next) => {
  console.log('in get trips', req.body)
  const queryString = 
    `SELECT * FROM trips
     WHERE user_id = $1`

  const { userID } = req.body;
  const entry = [userID];

  await db.query(queryString, entry, (err, queryRes) => {
    if (err) return next({message: "Error In Trips Query"});
    if (!queryRes.rows.length) return next({message: "No Trips Found"});
    res.locals.trips = queryRes.rows;
    return next();
  });
}

tripController.createTrip = async (req, res, next) => {

  const queryString = 
    `INSERT INTO trips (user_id, location, date)
     VALUES ($1, $2, $3)`;

  const { userID, location, date } = req.body;
  const entry = [userID, location, date];

  await db.query(queryString, entry, (err, queryRes) => {
    if (err) return next({message: "Error Creating New Trip In DB"});
    console.log("Trip Successfully created");
    return next();
  });

}









module.exports = tripController;