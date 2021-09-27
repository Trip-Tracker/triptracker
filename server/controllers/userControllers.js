const path = require("path");
const db = require(path.resolve(__dirname, "../../database/pool.js"));

const userController = {};

userController.createUser = (req, res, next) => {};

userController.verifyUser = (req, res, next) => {};
module.exports = userController;
