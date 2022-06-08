const express = require("express");
const app = express();
require("express").Router({ mergeParams: true });
require("dotenv").config();
const multer = require("multer");
const User = require("./models/User");
const Plant = require("./models/Plant");
const aws = require("aws-sdk");
const fs = require("fs");

const data = require("./data.json").Sheet1;
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

app.post("postUserImage", async (req, res, next) => {
  axios;
});

app.post("/postUser", async (req, res, next) => {
  const { username, image } = req.body;

  console.log(req.body);

  let user = new User({
    name: username,
    image: image
  });
  console.log("Inside post user");
  user
    .save()
    .then(result => {
      res.status(201).json({
        data: user
      });
    })
    .catch(error => {
      res.status(409).json({ errors: res.locals.errors });
    });
});

app.post("/postPlant", async (req, res, next) => {
  // const { username, image} = req.body;

  console.log(req.body);

  // use below commented code to make each string first letter capitalized in an array.
  // const photosURLArr =  req.body.photosURL.split(',').map(url =>
  //   `${url.trim().charAt(0).toUpperCase()}${url.trim().slice(1)}`);

  const photosURLArr = req.body.photosURL.split(",").map(url => url.trim());
  console.log(photosURLArr);
  const seasonArr = req.body.season.split(",").map(
    season =>
      `${season
        .trim()
        .charAt(0)
        .toUpperCase()}${season.trim().slice(1)}`
  );
  const locationArr = req.body.location.split(",").map(
    location =>
      `${location
        .trim()
        .charAt(0)
        .toUpperCase()}${location.trim().slice(1)}`
  );

  let plant = new Plant({
    name: req.body.name,
    scientificName: req.body.scientificName,
    description: req.body.description,
    photosURL: photosURLArr,
    season: seasonArr,
    location: locationArr,
    type: req.body.type,
    color: req.body.color,
    texture: req.body.texture,
    form: req.body.form,
    owner: req.body.owner
  });
  console.log("Inside post plant");
  plant
    .save()
    .then(result => {
      res.status(201).json({
        data: plant
      });
    })
    .catch(error => {
      res.status(409).json({ errors: res.locals.errors });
    });
});


// below endpoint loads plant data from data.json file into mongoose db
app.post("/loadData", async (req, res, next) => {
  // console.log(data);
  for (const plant of data) {
    // console.log(plant);
    const photosURLArr = plant.Url.split(",").map(url => url.trim());
    // console.log(photosURLArr);
    const seasonArr = plant.Season.split(",").map(
      season =>
        `${season
          .trim()
          .charAt(0)
          .toUpperCase()}${season.trim().slice(1)}`
    );
    const locationArr = plant.Location.split(",").map(
      location =>
        `${location
          .trim()
          .charAt(0)
          .toUpperCase()}${location.trim().slice(1)}`
    );
    const colorArr = plant.color.split(",").map(color => color.trim());

    let pla = new Plant({
      name: plant.Name,
      scientificName: plant.Scientific,
      description: plant.Description,
      photosURL: photosURLArr,
      season: seasonArr,
      location: locationArr,
      type: plant.Type,
      color: colorArr,
      texture: plant.texture,
      form: plant.form,
      owner: plant.owner
    });
    // console.log("Inside post plant");
    pla
      .save()
      .then(result => {
        console.log(`Saved: ${pla.name}`);
      })
      .catch(error => {
        res.status(409).json({ errors: res.locals.errors });
      });
  }

  res.json(data);
  
});
