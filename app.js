const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
require("express").Router({ mergeParams: true });
require("dotenv").config();
const multer = require("multer");
const path= require("path");
const User = require("./models/User");
const Plant = require("./models/Plant");
const AWS = require("aws-sdk");
const fs = require("fs");
const seedrandom = require("seedrandom");
const cors = require("cors");
const { generateToken, verifyToken } = require("./JWT.js");
const cookies = require("cookie-parser");
const fetch  = require("node-fetch");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY
});

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(cookies());

const data = require("./data.json").Sheet1;
const connection = require("./db/connection.js");
const { EMRcontainers } = require("aws-sdk");

connection.once("open", () => {
  const server = app.listen(process.env.PORT || 8080, () => {
    console.log(`Connected and listening on port ${process.env.PORT || 8080}`);
  });
});


const storage=multer.diskStorage({
destination:(req,file,cb)=>{
cb(null,__dirname);
},
filename:(req,file,cb)=>{

cb(null,file.originalname)
}
})

const uploadImage= multer({storage:storage});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// API to post image to amazon s3 service
// replace imageURL with the file path of the desired image to be uploaded
// the api returns data object with key "Location". It is the url to image.

app.post("/postImage", (req,res)=> {
  

  
  const imageURL = "http://localhost:3000/images/florens-logo_green.png";

  let imageUrlArr = imageURL.split("/");
  let imageUr = imageUrlArr[imageUrlArr.length-1];
  // console.log(imageUr);
  fetch(imageURL)
    .then(result => result.buffer())
    .then(async (blob) => {
     const uploadedImage = await s3.upload({
        Bucket: "florens",
        Key: imageUr,
        Body: blob
      }).promise();
      console.log(uploadedImage);
      res.json({data: uploadedImage});
    })
    .catch(error => console.log(error))
    .catch(error => console.log(error));
  
  
});


// cookies.set("email", "vi@gmail.com");

// app.get("/login/user", async (req, res) => {
//   console.log(req.query.email);
//   try {
//     const getU = await User
//       .findOne({ email: req.query.email })
//       .exec();

//     console.log(getU);
//     res.send(getU);

//   } catch (error) {
//     console.log(error);
//   }
// });
// Api for getting username from cookies

app.get("/getUsername",async(req,res)=>{

  var username = req.cookies['name'];
res.send(username);
})




// Api for login

app.post("/login", async (req, res, next) => {
  if (req.body.email == "" || req.body.password == "") {
    res.json({message:"Please enter the name and password "});
  } else {
    const user = await User.findOne({ email: req.body.email });
     console.log(req.body.email);

    if (user) {
      savedPass = await user.password;
      const pass = await bcrypt.compare(req.body.password, user.password);
      if (pass) {
        // cookies.set("email", user.email);

        const token = generateToken(user);
        res.cookie("token", token);
        res.cookie("name", user.name);
        res.status(200).json({message:"Password Validated"});
      } else {
        res.status(400).json({message:"Please enter the correct password"});
      }
    } else {
      res.status(400).json({message:"User not found"});
    }
  }
});


app.get("/getimage",async (req,res)=>{
  let user = await User.findOne({ email: req.body.email });
})

//API for Signup
app.post("/postUser", uploadImage.single('image'), async (req, res, next) => {
  let user = await User.findOne({ email: req.body.email });
  console.log(user);
  if (user) {
    res.status(400).json({message:"User already exists"});
  } else {
    user = new User({
      name: req.body.name,
      image:{
        data:fs.readFileSync(req.file.path),
        contentType:req.file.mimetype
      },
      email: req.body.email,
      password: req.body.password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user
      .save()
      .then(result => {
        res.status(201).json({
          data: user
        });
      })
      .catch(error => {
        res.status(409).json({ error });
      });
  }
});

// below endpoint adds plant to the database
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
  await Plant.deleteMany({}).catch(error => console.log(error));

  for (const plant of data) {
    // console.log(plant);
    let photosURLArr, seasonArr, locationArr, colorArr;
    if (plant.Url != undefined) {
      photosURLArr = plant.Url.split(",").map(url => url.trim());
    }

    if (plant.Season != undefined) {
      seasonArr = plant.Season.split(",").map(
        season =>
          `${season
            .trim()
            .charAt(0)
            .toUpperCase()}${season.trim().slice(1)}`
      );
    }

    if (plant.Location != undefined) {
      locationArr = plant.Location.split(",").map(
        location =>
          `${location
            .trim()
            .charAt(0)
            .toUpperCase()}${location.trim().slice(1)}`
      );
    }

    if (plant.color != undefined) {
      colorArr = plant.color.split(",").map(color => color.trim());
    }

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
        console.log(error);
        // res.status(409).json({ errors: res.locals.errors });
      });
  }
  res.json(data);
});

// Below endpoint returns a random plant.
// The plant generated is based on the current day.
// So, it always stays same on that particular day.
app.get("/plantOfTheDay", async (req, res, next) => {
  let today = new Date();
  // console.log(req);
  let rng = seedrandom(today.getDate().toString());
  Plant.count().then(count => {
    // console.log(`Count: ${count}`);
    let plantIndex = Math.floor(rng() * count);

    // console.log(`Plant Number: ${plantIndex}`);
    Plant.find()
      .skip(plantIndex)
      .limit(1)
      .then(result => {
        res.status(201).json({
          data: result[0]
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
app.patch("/addPlantToLibrary", verifyToken, (req, res) => {
  const plantObjectID = req.body.plantObjectID;
  const useremail = req.body.useremail;
  console.log(plantObjectID);
  console.log(useremail);
  User.findOne({ email: useremail }, { library: 1 })
    .then(result => {
      User.updateOne(
        { email: useremail },
        { library: [...result.library, plantObjectID] }
      )
        .then(
          res.status(201).json({ data: [...result.library, plantObjectID] })
        )

        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
});

// below endpoint updates the library array on user database to delete plant from its library.
// it takes plantObjectID and useremail as request body parameters.
// it returns the updated library array in json format.
app.patch("/deletePlantFromLibrary", verifyToken, (req, res) => {
  const plantObjectID = req.body.plantObjectID;
  const useremail = req.body.useremail;
  console.log(plantObjectID);
  console.log(useremail);
  User.findOne({ email: useremail }, { library: 1 })
    .then(result => {
      console.log(result.library);
      User.updateOne(
        { email: useremail },
        {
          library: result.library.filter(element => {
            if (element != plantObjectID) {
              return element;
            }
          })
        }
      )
        .then(result2 => {
          console.log(result2);
          // res.send()
          const updatedLibrary = result.library.filter(element => {
            if (element != plantObjectID) {
              return element;
            }
          });
          res.send(updatedLibrary);
        })
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));

  // res.send("success");
});

// below endpoint fetches the library array of user.
// it takes plantObjectID and useremail as request body parameters.
// it returns the library array in json format.
app.post("/getLibrary",(req, res) => {
  const useremail = req.body.useremail;
  console.log(useremail);
  User.findOne({ email: useremail }, { library: 1 })
    .then(result => {
      console.log(
        `Current Subscriptions of ${useremail} are ${result.library.toString()}`
      );
      if (result != null) {
        res.status(200).json({ data: result.library });
      } else {
        res.send([]);
      }
    })
    .catch(error => console.log(error));
  // res.send("failure");
});

//Edit Details API

app.patch("/edit"  , (req, res) => {
  // const ObjectID = req.body.ObjectID;
  const name = req.body.name;
  const email = req.body.email;
  User.findOne({ email: email })
    .then(result => {
      User.updateOne({ email: email }, { name: name })
        .then(res.status(201).json({ data: [name, email] }))

        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
});

/* 
 API to get filtered search results

 Request Body example:
{
    "searchText" : "",
    "searchType": ["Herbaceous perennial", "Ground Cover", "Fern-Weed"],
    "searchForm" : ["Mounded","Compound, Fern-like"],
    "searchColor" : ["White", "Yellow"],
    "searchSeason" : [],
    "searchLocation" : ["Burnaby", "Vancouver"],
    "searchTexture" : []

}

Returns plant data in json format

*/
app.post("/searchResults", (req, res) => {
  console.log("req.body");
  console.log(req.body);
  let sendResults = [];
  const re = new RegExp(`.*${req.body.searchText}.*`, "i");
  console.log(re);
  // console.log(req.body.searchOptions.searchText);
  Plant.find({})
    .then(result => {
      // console.log(result);

      // Search Text Filter
      result.forEach(element => {
        if (
          req.body.searchText == "" ||
          re.test(element.name) ||
          re.test(element.scientificName)
        ) {
          sendResults.push(element);
        }
      });

      // Plant Type Filter
      if (req.body.searchType != null && req.body.searchType.length >= 1) {
        // console.log("here");
        sendResults = sendResults.filter(element => {
          // console.log(req.body.plantType);
          // console.log(element.type);

          if (req.body.searchType.includes(element.type)) {
            return element;
          }
        });
      }

      // Plant Season Filter
      if (req.body.searchSeason != null && req.body.searchSeason.length >= 1) {
        sendResults = sendResults.filter(element => {
          // console.log("***************************************************************");
          // console.log(element.season);
          for (const plantSeasonItem of element.season) {
            // console.log(plantSeasonItem);
            if (req.body.searchSeason.includes(plantSeasonItem)) {
              return element;
            }
          }
        });
      }

      //Plant Location Filter
      if (
        req.body.searchLocation != null &&
        req.body.searchLocation.length >= 1
      ) {
        sendResults = sendResults.filter(element => {
          for (const plantLocationItem of element.location) {
            if (req.body.searchLocation.includes(plantLocationItem)) {
              return element;
            }
          }
        });
      }

      //Plant Color Filter
      if (req.body.searchColor != null && req.body.searchColor.length >= 1) {
        sendResults = sendResults.filter(element => {
          for (const plantColorItem of element.color) {
            if (req.body.searchColor.includes(plantColorItem)) {
              return element;
            }
          }
        });
      }

      //Plant Texture Filter
      if (
        req.body.searchTexture != null &&
        req.body.searchTexture.length >= 1
      ) {
        sendResults = sendResults.filter(element => {
          if (req.body.searchTexture.includes(element.texture)) {
            return element;
          }
        });
      }

      //Plant Form Filter
      if (req.body.searchForm != null && req.body.searchForm.length >= 1) {
        sendResults = sendResults.filter(element => {
          if (req.body.searchForm.includes(element.form)) {
            return element;
          }
        });
      }

      // console.log(sendResults);
      res.send(sendResults);
    })
    .catch(error => console.log(error));
});



app.get("/searchOption", (req, res, next) => {
  // const optionText  = req.params.option;
  // console.log(optionText);
  let colorSet = new Set();
  let color = [];

  let locationSet = new Set();
  let location = [];

  let typeSet = new Set();
  let type = [];

  let textureSet = new Set();
  let texture = [];

  let formSet = new Set();
  let form = [];

  // console.log("here");
  Plant.find({})
    .then(result => {
      // console.log(result);
      result.forEach(element => {
        // console.log(element.season);
        // console.log(element.fields.local_areas);
        // console.log(element[season]);
        // optionSet.add(element[optionText]);
        if (element.color) {
          element.color.forEach(x => {
            colorSet.add(x);
          });
        }

        if (element.location) {
          element.location.forEach(x => {
            locationSet.add(x);
          });
        }

        if (element.type) {
          typeSet.add(element.type);
           }

        if (element.texture) {
            textureSet.add(element.texture);
          
        }

        if (element.form) {
            formSet.add(element.form);
          }
        // console.log(location);
      });
      // console.log(location);
      // option = [...optionSet];
      colorSet.forEach(x => {
        if (x) {
          color.push(x);
        }
      });

      locationSet.forEach(x => {
        if (x) {
          location.push(x);
        }
      });


      typeSet.forEach(x => {
        if (x) {
          type.push(x);
        }
      });

      textureSet.forEach(x => {
        if (x) {
          texture.push(x);
        }
      });

      formSet.forEach(x => {
        if (x) {
          form.push(x);
        }
      });
      res.send({ searchColor: color , searchLocation: location, searchTexture:texture, searchForm:form, searchType:type});
    })
    .catch(error => console.log(error));
});
