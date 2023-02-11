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
exports.batchInsert = async (req, res) => {
  try {
    const data = [];
    req.body.map((item) => data.push(Object.values(item)));
    console.log("data", data);
    var sql = "INSERT INTO users (email, password, name) VALUES ?";
    db.query(sql, [data], function (error, result) {
      if (error) {
        console.error("error", error);
        return;
      }
      console.log("Number of records inserted: " + result.affectedRows);
    });
    const response = { code: 0, message: "挿入出来ました。", result: {} };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
};
