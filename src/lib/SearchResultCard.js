import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function(props) {
  return (
    <>
      <div class="thirdSectionCardList">
        <div class="thirdSectionCardsInner">
          <img src={props.plant.photosURL[0]} alt="plant" />
          <h3>{props.plant.name}</h3>
          {/* <p>{props.plant.description}</p> */}
          <p>{props.plant.description.toString().substring(0, 60) + `...`}</p>
          <Link to="/plant" state={props.plant}>
            <button type="button">Details</button>
          </Link>
        </div>
      </div>
    </>
  );
}
