const path = require("path");
const db = require(path.resolve(__dirname, "../../database/pool.js"));

const locationController = {};

locationController.getLocations = async (req, res, next) => {

  const queryString = 
    `SELECT * FROM locations
     WHERE trip_id = $1`
  
  const { tripID } = req.body;
  const entry = [tripID];

  await db.query(queryString, entry, (err, queryRes) => {
    if (err) return next({message: "Error in Verify Location Query"});
    if (!queryRes.rows.length) return next({message: "No Locations Found"});
    res.locals.locations = queryRes.rows;
  });
}



module.exports = locationController;