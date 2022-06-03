const express = require("express");
const app = express();
require("dotenv").config();


const connection = require("./db/connection.js");

connection.once("open", () => {
  const server = app.listen(process.env.PORT || 8080, () => {
    console.log(`Connected and listening on port ${process.env.PORT || 8080}`);
  });
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
