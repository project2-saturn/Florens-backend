import React , {useState, useEffect}from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function() {

  const [plant,setPlant] = useState({
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

  useEffect(function loadPlantOfTheDay() {
    axios.get("/plantOfTheDay").then(result => {
      let temp = result.data.data;
      setPlant({...temp});
      // console.log(plant);
    }).catch(error => console.log(error));
  },[]);
  return (
    <>
      <section class="secondSection">
        <h2 class="secondSectionHeadings">Plant of the Day</h2>
        <div class="secondHomeSectionCard">
          <div class="secondSecImg">
            <img src={plant.photosURL[0]} alt="plant" />
          </div>
          <div class="plantInfo">
            <h3>
              {plant.name}
            </h3>
            <p class="plantHomeDescriptionMain">{plant.scientificName}</p>

            <div class="plantHomeDescItems1">
              <h5 class="plantDescItemsHeading">Plant Type</h5>
              <p class="plantDescItemsPara">{plant.type}</p>
            </div>
            <div class="plantHomeDescItems2">
              <h5 class="plantDescItemsHeading">Season</h5>
              <p class="plantDescItemsPara">{plant.season[0]}</p>
            </div>
            <div class="plantHomeDescItems3">
              <h5 class="plantDescItemsHeading">Color</h5>
              <p class="plantDescItemsPara">{plant.color[0]}</p>
            </div>
            <div class="plantHomeDescItems4">
              <h5 class="plantDescItemsHeading">Flower color</h5>
              <p class="plantDescItemsPara">{plant.color[0]}</p>
            </div>
            <div class="plantHomeDescItems5">
              <h5 class="plantDescItemsHeading">Form</h5>
              <p class="plantDescItemsPara">{plant.form}</p>
            </div>
            <div class="plantHomeDescItems6">
              <h5 class="plantDescItemsHeading">Texture</h5>
              <p class="plantDescItemsPara">{plant.texture}</p>
            </div>
            <Link to="/plant"  state={plant}>
            <button className="secondHomeSectionBtn" type="button">Details</button>
            </Link> </div>
        </div>
      </section>
    </>
  );
}
