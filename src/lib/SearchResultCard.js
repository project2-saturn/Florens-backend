import React, {useState} from "react";
import axios from "axios";
import Modal from "../lib/Modal.js"
import Cookies from 'js-cookie';
import { Link, useNavigate } from "react-router-dom";


export default function(props) {
  const navigator=useNavigate();
  const[show,setShow]=useState(false);
 
  const handlemodal=()=>{
    setShow(!show);

  }
let cookies= Cookies.get('token');
 

  
  return (
    <>
      <div class="thirdSectionCardList">
        <div class="thirdSectionCardsInner">
          <img class="thirdSectionCardMainImage" src={props.plant.photosURL[0]} alt="plant" />
          
          <h3>{props.plant.name}</h3>
          <p>{props.plant.description.toString().substring(0, 60) + `...`}</p>
          <div className="searchResultCardButtons">
          <Link to="/plant" state={props.plant}>
            <button class="homeThirdSecDetailsButton" type="button">Details</button>
          </Link>
          <button id="libButton" class="libButton" onClick={handlemodal} >Lib</button>
          {console.log("entered")}
          {console.log(cookies)}
          {cookies ?  navigator("/mylibrary") :<Modal show={show} setShow={setShow}/>}
         
          </div>
        </div>
      </div>
    </>
  );
}
