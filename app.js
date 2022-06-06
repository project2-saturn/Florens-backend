const express = require("express");
const app = express();
require("express").Router({ mergeParams: true });
require("dotenv").config();
const multer = require('multer');
const User = require("./models/User");
const Plant = require("./models/Plant");
const aws = require( 'aws-sdk');
const fs =require('fs');



const connection = require("./db/connection.js");

connection.once("open", () => {
  const server = app.listen(process.env.PORT || 8080, () => {
    console.log(`Connected and listening on port ${process.env.PORT || 8080}`);
  });
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.get("/getUser", async (req, res, next) => {
//   User.find({})
//     .then((results) => {
//       res.status(200).json(results);
//     })
//     .catch((error) => res.status(500).send(error));
// });

app.post("postUserImage", async(req,res,next)=> {
  axios
});

app.post("/postUser", async (req, res, next) => {
  const { username, image} = req.body;
  
  console.log(req.body);

  let user = new User({
    name: username,
    image: image
  });
  console.log("Inside post user");
  user
    .save()
    .then((result) => {
      res.status(201).json({
        data: user,
      });
    })
    .catch((error) => {
      res.status(409).json({ errors: res.locals.errors });
    });
});



app.post("/postPlant", async (req, res, next) => {
  // const { username, image} = req.body;
  
  console.log(req.body);

  let plant = new Plant({
    name: req.body.name,
    
  });
  console.log("Inside post plant");
  plant
    .save()
    .then((result) => {
      res.status(201).json({
        data: plant,
      });
    })
    .catch((error) => {
      res.status(409).json({ errors: res.locals.errors });
    });
});