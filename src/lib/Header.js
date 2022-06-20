import React from "react";

export default function() {
  return (
    <header>
      <div class="navBar">
        <img
          class="headerLogo"
          src="../images/florens-logo_green.png"
          alt="logo"
        />
        <a class="aboutNav" href="">
          About
        </a>
        <a class="loginNav" href="">
          Login
        </a>
      </div>
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
      <div class="searchBar">
        <input
          type="text"
          class="inputSearch"
          placeholder=" &#xf002;      Start typing..."
        />
        <div class="btn btn_common">
          <i class="fas fa-search fa-2x"></i>
        </div>
      </div>
      <div class="accordion">
        <button type="button" class="accordion_button ">
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
