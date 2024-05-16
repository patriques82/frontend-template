const express = require("express");
const mysql = require("mysql2/promise");

async function connectDB() {
  const connection = await mysql.createConnection({
    user: "root",
    password: "root",
    host: "localhost",
    database: "users",
  });
  const [results] = await connection.query("SELECT * FROM users");
  console.log(results);
}
connectDB();

const app = express();

app.use(express.static("public"));

app.listen(3000, function () {
  console.log("started listeing on localhost:3000");
});
