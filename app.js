const express = require("express");
const bcrypt=require('bcrypt');
const app = express();
require("express").Router({ mergeParams: true });
require("dotenv").config();
const multer = require("multer");
const User = require("./models/User");
const Plant = require("./models/Plant");
const aws = require("aws-sdk");
const fs = require("fs");
const seedrandom = require("seedrandom");

const data = require("./data.json").Sheet1;
const connection = require("./db/connection.js");
const { EMRcontainers } = require("aws-sdk");

connection.once("open", () => {
  const server = app.listen(process.env.PORT || 8080, () => {
    console.log(`Connected and listening on port ${process.env.PORT || 8080}`);
  });
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/getUser", async (req, res, next) => {
 
if(req.body.email =="" || req.body.password=="")
{
  res.send("Please enter the name and password ")
}
else{
  const user=await User.findOne({email:req.body.email})
  if(user)
  {
    const pass=await bcrypt.compare(user.password,req.body.password)
    if(pass)
    {
    user.then((results) => {
      res.status(200).json(results);
    })
    .catch((error) => res.status(500).send(error));
}
else{

  res.send("Please enter the correct password")
}
}
else{

  res.send("User not found")
}}})
;


app.post("postUserImage", async (req, res, next) => {
  axios;
});

app.post("/postUser", async (req, res, next) => {
let user=await User.findOne({email:req.body.email})
console.log(user);
if(user)
{
  res.status(400).send("User already exists")
}

else{
  user = new User({
    name: req.body.name,
    email:req.body.email,
    password:req.body.password
  });

   const salt= await bcrypt.genSalt(10);
user.password= await bcrypt.hash(user.password,salt)
user.save()
.then(result => {
  res.status(201).json({
    data: user
  });
})
.catch(error => {
  res.status(409).json({ error });
});


}

})

  
  

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

// Below endpoint returns a random plant.
// The plant generated is based on the current day.
// So, it always stays same on that particular day.
app.get("/plantOfTheDay", async (req, res, next) => {
  let today = new Date();
  let rng = seedrandom(today.getDate().toString());
  Plant.count().then(count => {
    console.log(`Count: ${count}`);
    let plantIndex = Math.floor(rng() * count);

    console.log(`Plant Number: ${plantIndex}`);
    Plant.find()
      .skip(plantIndex)
      .limit(1)
      .then(result => {
        res.status(201).json({
          data: result
        });
      })
      .catch(error => {
        res.status(409).json({ errors: error });
      });
  });
});


// below endpoint gets random specified number of plants.
// examples to use: '/randomPlants/10' , '/randomPlants/4'
app.get("/randomPlants/:numOfPlants", async (req, res, next) => {
  Plant.find({})
    .then(results => {
      const resultArray = [];
      for (i = 0; i < req.params.numOfPlants; i++) {
        const rand = Math.floor(Math.random() * results.length);
        resultArray.push(results[rand]);
      }

      res.status(200).json(resultArray);
    })
    .catch(error => res.status(500).send(error));
});


// below endpoint get all the plants data from the database
app.get("/plants", async (req, res, next) => {
  Plant.find({})
    .then(results => {
      res.status(200).json(results);
    })
    .catch(error => res.status(500).send(error));
});


// below endpoint updates the library array on user database to add plant to its library.
// it takes plantObjectID and useremail as request body parameters.
// it returns the updated library array in json format.
app.patch("/plantLibrary", (req, res) => {
  const plantObjectID = req.body.subscriptionID;
  const useremail = req.body.username;
  console.log(plantObjectID);
  console.log(useremail);
  User.findOne({ email: useremail }, { library: 1 })
    .then(result => {
      console.log(result.library);
      res.status(200).json({ data: result.library });
    })
    .catch(error => console.log(error));
});
