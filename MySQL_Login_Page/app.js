const express = require("express");
const path = require("path")
const mysql = require("mysql2");
const app = express();
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'html');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'NewPassword',
    database: 'sql_login'
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MYSQL CONNECTED")
    }
})

app.use('/', require('./routes/index'));

app.listen(5000)
