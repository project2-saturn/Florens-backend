import React , {useState, useEffect}from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Modal from "../lib/Modal.js";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function(props) {
  const navigator = useNavigate();
  const [show, setShow] = useState();
  const [addedtoLib, setAddedToLib] = useState(false);
  const [userEmail, setUserEmail] = useState();

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

  useEffect(function loadUserEmail() {
    axios
      .get("/getUserEmail")
      .then(result => {
        console.log(result);

        setUserEmail(result.data);
        if (result.data == "") {
          setUserEmail("KPU");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


const addToLibrary =event=>{
  axios.patch("addPlantToLibrary", {plantObjectID: plant.id, useremail:userEmail}).then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(error);
  });
}
  // setPicture(result.data.image);
  // console.log(image);
  // navigator("/");
  const handlemodal = () => {
    setShow(true);
    setAddedToLib(true)
    };
  let cookies = Cookies.get("token");


  useEffect(function loadPlantOfTheDay() {
    axios.get("/plantOfTheDay").then(result => {
      let temp = result.data.data;
      console.log(temp);
      setPlant({...temp});
      // console.log(plant);
    }).catch(error => console.log(error));
  },[]);
  return(
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
            <img className="cardWavyLineHome" src="../images/line-under-plantname.png" alt="plant" />
            <p class="plantHomeDescriptionMain">{plant.scientificName}</p>
          </div>
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
            <div>
            <Link to="/plant"  state={plant}>
            <button className="secondHomeSectionBtn" type="button">Details</button>
            </Link> </div>
            {cookies ?  <button id="libButton" class="plantDayLeafBtn libButton" onClick={handlemodal}>
            
            {show ? <img src="../images/added-plant-library.png" />: <img src="../images/addBtn.png"  onClick={addToLibrary}/>}
            </button>
            
            : 
            <div>
            <button id="libButton" className="plantDayLeafBtn libButton" onClick={handlemodal}>
              <img src="../images/addBtn.png" />
            
            </button>
            </div>
            }
            {cookies ? <></>
              
            : (
              <Modal show={show} setShow={setShow} />
            )}
              
        </div>
        
      </section>
    </>
  );
}
