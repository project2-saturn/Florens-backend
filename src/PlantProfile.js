import React, { useEffect, useState } from "react";
import "./styles/plantprofile.css";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavigationBar from "./lib/NavigationBar";
import Footer from "./lib/Footer";
import PlantProfileImage from "./lib/PlantProfileImage";

const PlantProfile = props => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  //   console.log(state);
  const [plant, setPlant] = useState({
    color: [],
    description: "",
    form: "",
    id: "",
    location: [],
    name: "",
    owner: "",
    photosURL: [],
    scientificName: "",
    season: [],
    texture: "",
    type: ""
  });

  useEffect(() => {
    setPlant({ ...data });
    // console.log(plant);
  }, []);

  return (
    <>
      {/* <h1>HEloo.. this is the search page</h1> */}
      {/* <h2>{data.firstname[0]} </h2> */}
      {/* <Link to="/">Click here to go to homepage</Link> */}
      <header>
        <NavigationBar />
      </header>
      <main class="secondSectionPlantProfile">
          <div class="secondSectionCardPlantProfile">
            {plant.photosURL[0] ? (
              <div class="secondSecImgPlantProfile">
                <img src={plant.photosURL[0]} alt="plant" />
              </div>
            ) : (
              <></>
            )}
            <div className="addImagesDiv">
            {plant.photosURL[1] ? (
              <div class="secondSecImge">
                <img src={plant.photosURL[1]} alt="plant" />
              </div>
            ) : (
              <></>
            )}
            {plant.photosURL[2] ? (
              <div class="secondSecImges">
                <img src={plant.photosURL[2]} alt="plant" />
              </div>
            ) : (
              <></>
            )}
            {plant.photosURL[3] ? (
              <div class="secondSecImga">
                <img src={plant.photosURL[3]} alt="plant" />
              </div>
            ) : (
              <></>
            )}
            {plant.photosURL[4] ? (
              <div class="secondSecImgas">
                <img src={plant.photosURL[4]} alt="plant" />
              </div>
            ) : (
              <></>
            )}
            </div>

            {/* <div class="secondSecImge">
              <img src="../images/Rectangle_3_et.png" alt="plant" />
            </div>
            <div class="secondSecImges">
              <img src="../images/Rectangle_3_et.png" alt="plant" />
            </div>
            <div class="secondSecImga">
              <img src="../images/Rectangle_3_et.png" alt="plant" />
            </div>
            <div class="secondSecImgas">
              <img src="../images/Rectangle_3_et.png" alt="plant" />
            </div> */}
            <div class="plantInfoPlant">
              <h3 className="plantInfoPlantHeading" >
                {plant.name}</h3>
              <p class="subTag">{plant.scientificName}</p>

              <p class="plantDescp">
                {plant.description}</p>
              <div className="plantProfileTypesContainer">
              <div class="plantDescItems1">
                <h5 class="plantDescItemsHeading">Plant Type</h5>
                <p class="plantDescItemsPara">{plant.type}</p>
              </div>
              <div class="plantDescItems2">
                <h5 class="plantDescItemsHeading">Season</h5>
                <p class="plantDescItemsPara">{plant.season[0]}</p>
              </div>
              <div class="plantDescItems3">
                <h5 class="plantDescItemsHeading">Color</h5>
                <p class="plantDescItemsPara">{plant.color[0]}</p>
              </div>
              <div class="plantDescItems4">
                <h5 class="plantDescItemsHeading">Flower color</h5>
                <p class="plantDescItemsPara">{plant.color[0]}</p>
              </div>
              <div class="plantDescItems5">
                <h5 class="plantDescItemsHeading">Form</h5>
                <p class="plantDescItemsPara">{plant.form}</p>
              </div>
              <div class="plantDescItems6">
                <h5 class="plantDescItemsHeading">texture</h5>
                <p class="plantDescItemsPara">{plant.texture}</p>
              </div>
              </div>

              <div class="lineSec"></div>
              <img
                class="contributer"
                src="../images/Rectangle_3_et.png"
                alt="plant"
              />
              <p class="contribution">Contribution from John Smith</p>
              <button class="editBtn" type="button"><img  src="../images/edit.png" alt="plant" />
              &nbsp; Edit
              </button>
              <button class="deletBtn" type="button"><img  src="../images/delete.png" alt="plant" />
              &nbsp; Delete
              </button>
            </div>
          </div>
      </main>
      <Footer />
    </>
  );
};

export default PlantProfile;
