import React, { useState,useEffect } from "react";
import axios from "axios";
import Modal from "../lib/Modal.js";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

export default function(props) {
  const navigator = useNavigate();
  const [show, setShow] = useState();
  const [addedtoLib, setAddedToLib] = useState(false);
  const [userEmail, setUserEmail] = useState();

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
  axios.patch("addPlantToLibrary", {plantObjectID: props.plant.id, useremail:userEmail}).then((result) => {
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

  return (
    <>
      <div class="thirdSectionCardList">
        <div class="thirdSectionCardsInner">
          <img
            class="thirdSectionCardMainImage"
            src={props.plant.photosURL[0]}
            alt="plant"
          />
          <div className="searchResultNameDesc">
            <h3 className="nameToolTip">
              {props.plant.name != null ? (
                props.plant.name.toString().substring(0, 12) + `...`
              ) : (
                <></>
              )}
              <span class="nameToolTipText">
                {props.plant.name != null ? props.plant.name : <></>}
              </span>
            </h3>
            <img
              className="cardWavyLine"
              src="../images/line-under-plantname.png"
              alt="plant"
            />
            <p>
              {props.plant.description != null ? (
                props.plant.description.substring(0, 60) + `...`
              ) : (
                <></>
              )}
            </p>
          </div>
          <div className="searchResultCardButtons">
            <Link to="/plant" state={props.plant}>
              <button class="homeThirdSecDetailsButton" type="button">
                DETAILS
              </button>
            </Link>
            {cookies ?  <button id="libButton" class="libButton" onClick={handlemodal}>
            
            {show ? <img src="../images/added-plant-library.png" />: <img src="../images/addBtn.png"  onClick={addToLibrary}/>}
            </button>
            
            : 
            <>
            <button id="libButton" class="libButton" onClick={handlemodal}>
              <img src="../images/addBtn.png" />
            
            </button>
            {/* {console.log("entered")}
          {console.log(cookies)} */}
            {cookies ? <></>
              
            : (
              <Modal show={show} setShow={setShow} />
            )}
              </>
            }
          </div>
        </div>
      </div>
    </>
  );
}
