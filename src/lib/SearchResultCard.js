import React from "react";
import axios from "axios";

export default function(props) {
  return (
    <>
      <div class="thirdSectionCardList">
        <div class="thirdSectionCardsInner">
          <img src={props.plant.photosURL[0]} alt="plant" />
          <h3>{props.plant.name}</h3>
          {/* <p>{props.plant.description}</p> */}
          <p>{props.plant.description.toString().substring(0,60) + `...`}</p>
          <button type="button">Details</button>
        </div>
      </div>
    </>
  );
}
