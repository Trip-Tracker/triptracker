const path = require("path");
const db = require(path.resolve(__dirname, "../../database/pool.js"));

const userController = {};

userController.createUser = async (req, res, next) => {

  const queryString = 
  'INSERT INTO users (email, password) VALUES ($1, $2)';

  const { email, password } = req.body;
  const entry = [email, password];

  console.log(entry);
  console.log(req.body)

  await db.query(queryString, entry, (err, res) => {
    if (err) return next({message: 'Error in Create User Middleware'});
    console.log(res);
    return next()
  })
};

userController.verifyUser = (req, res, next) => {
  
};
module.exports = userController;
