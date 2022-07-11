import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function(props) {
  return (
    <>
      <div class="thirdSectionCardList">
        <div class="thirdSectionCardsInner">
          <img class="thirdSectionCardMainImage" src={props.plant.photosURL[0]} alt="plant" />
          <div className="searchResultNameDesc">
          <h3>{props.plant.name}</h3>
          <p>{props.plant.description.toString().substring(0, 60) + `...`}</p>
          </div>
          <div className="searchResultCardButtons">
          <Link to="/plant" state={props.plant}>
            <button class="homeThirdSecDetailsButton" type="button">Details</button>
          </Link>
          <button id="libButton" class="libButton" type="button">Lib</button>
          </div>
        </div>
      </div>
    </>
  );
}
