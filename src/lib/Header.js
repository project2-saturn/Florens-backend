import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";

export default function() {
  return (
    <header class="homeHeader">
      <NavigationBar />
      <div class="headerText">
        <h1 class="headerTextHeading">
          A Pocket Expert <br />
          for B.C. Plants
        </h1>
        <p class="headerTextPara">
          Explore British Columbia native flora. Florens is an <br />
          application to learn about our flowers, trees and plants
          <br />
          and get connected with the nature around you.
        </p>
      </div>
      <div class="searchBarHome">
        <input
          type="text"
          class="inputSearch"
          placeholder=" &#xf002;      Start typing..."
        />
        <Link to="/search">
          <div class="btnHome btn_common">
            <i class="fas fa-search fa-2x"></i>
          </div>
        </Link>
      </div>
      <div class="accordion">
        <button type="button" class="accordion_buttonHome">
          Advanced Search
        </button>
        <div class="accordion_content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit . Magni
            quaerat eius maiores odio rerum dicta officia inventore tenetur
            doloremque molestiae similique ratione Quaerat voluptates veniam
            quisquam . Lorem Lorem ipsum dolor sit amet consectetur adipisicing
            elit . Magni quaerat eius maiores odio rerum dicta officia inventore
            tenetur doloremque molestiae similique ratione Quaerat voluptates
            veniam quisquam . Lorem ipsum dolor sit amet consectetur adipisicing
            elit . Magni quaerat eius maiores odio rerum dicta officia inventore
            tenetur doloremque molestiae similique ratione Quaerat voluptates
            veniam quisquam . Lorem ipsum dolor sit amet consectetur adipisicing
            elit . Magni quaerat eius maiores odio rerum dicta officia inventore
            tenetur doloremque molestiae similique ratione Quaerat voluptates
            veniam quisquam . Lorem ipsum dolor sit amet consectetur adipisicing
            elit . Magni quaerat eius maiores odio rerum dicta officia inventore
            tenetur doloremque molestiae similique ratione Quaerat voluptates
            veniam quisquam . ipsum dolor sit amet consectetur adipisicing elit
            . Magni quaerat eius maiores odio rerum dicta officia inventore
            tenetur doloremque molestiae similique ratione Quaerat voluptates
            veniam quisquam . Lorem ipsum dolor sit amet consectetur adipisicing
            elit . Magni quaerat eius maiores odio rerum dicta officia inventore
            tenetur doloremque molestiae similique ratione Quaerat voluptates
            veniam quisquam . Lorem ipsum dolor sit amet consectetur adipisicing
            elit . Magni quaerat eius maiores odio rerum dicta officia inventore
            tenetur doloremque molestiae similique ratione Quaerat voluptates
            veniam quisquam . Lorem ipsum dolor sit amet consectetur adipisicing
            elit . Magni quaerat eius maiores odio rerum dicta officia inventore
            tenetur doloremque molestiae similique ratione Quaerat voluptates
            veniam quisquam .
          </p>
        </div>
      </div>
    </header>
  );
}
