import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../lib/Modal.js";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

export default function(props) {
  const [result, setResult] = useState({
    photosURL: [],
    season: [],
    location: [],
    color: [],
    name: "",
    scientificName: "",
    description: "",
    type: "",
    texture: "",
    form: "",
    owner: ""
  });

  useEffect(function loadResult() {
    axios
      .post("plantsID", { objectID: props.plantID })
      .then(results => {
        console.log(results);
        setResult({ ...results.data[0] });
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <>
      <div class="discovery-card">
        <div class="discovery-item">
          <div class="discovery-image">
            <img
              src={
                result.photosURL[0] != null
                  ? result.photosURL[0]
                  : "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
              }
            />
          </div>
          <div class="card-info">
            <h2 class="discovery-title">
              {result.name != null ? result.name : <></>}
            </h2>
            <hr class="short-line" />
            <p class="card-intro">
              {result.description != null ? result.description.toString().substring(0, 60) + `...` : <></>}
            </p>
          </div>
          <div class="buttons">
            <Link to="/plant" state={result}>
              <button type="button" class="discovery-button">
                Details
              </button>
            </Link>
          </div>
         
          {/* <hr class="long-line" />
          <div class="navigation-button">
            <button class="btn">
              <i class="fa fa-home"></i> Edit
            </button>
            <button class="btn">
              <i class="fa fa-bars"></i> Delete
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}
