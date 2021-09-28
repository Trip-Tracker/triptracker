const path = require("path");
const db = require(path.resolve(__dirname, "../../database/pool.js"));

const tripController = {};

tripController.getTrips = async (req, res, next) => {

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









module.exports = tripController;