const db = require("mysql2-promise")();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { promisify } = require("util");

db.configure({
  host: "localhost",
  user: "root",
  password: "NewPassword",
  database: "sql_login",
});
exports.queryGoodes = async (req, res) => {
  try {
    const rs = await db.query("SELECT * FROM users ");
    res.status(200).json(rs[0]);
  } catch (err) {
    console.log(err);
  }
};
