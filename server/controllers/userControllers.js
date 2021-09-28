const path = require("path");
const db = require(path.resolve(__dirname, "../../database/pool.js"));

const userController = {};

userController.createUser = async (req, res, next) => {

  const queryString = 
  `INSERT INTO users (email, password)
   VALUES ($1, $2)`;

  const { email, password } = req.body;
  const entry = [email, password];

  await db.query(queryString, entry, (err, queryRes) => {
    if (err) return next({message: 'Error in Create User Middleware'});
    return next()
  });

};

userController.verifyUser = async (req, res, next) => {

  const queryString = 
    `SELECT _id, email, password
     FROM users
     WHERE email = $1 AND password = $2`

  const { email, password } = req.body;
  const entry = [email, password];

  db.query(queryString, entry, (err, queryRes) => {
    if (err) return next({message: "Error in Verify User Query"});
    if (!queryRes.rows.length) return next({message: "Username & Password Combination Not Found"})
    res.locals.user = queryRes.rows[0];
    return next();
  })


};
module.exports = userController;
