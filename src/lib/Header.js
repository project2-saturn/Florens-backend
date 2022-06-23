import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";

export default function() {

  const handleAccordionButtonToggle = function() {
    document.querySelectorAll(".accordion_buttonHome").forEach(button => {
      const accordionContent = button.nextElementSibling;
      // button.classList.toggle('header_background');
      button.classList.toggle("accordion_button--active");
      if (button.classList.contains("accordion_button--active")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = 0;
      }
    });
  };
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
        <button type="button" class="accordion_buttonHome" onClick={handleAccordionButtonToggle}>
          Advanced Search
        </button>
        <div class="accordion_content">
          <div class="filterSectionOne">
            <p class="filterP">Plant Type</p>
            <ul class="filterUl">
              <li class="filterLi">All</li>
              <li class="filterLi">|</li>
              <li class="filterLi">Clear</li>
            </ul>
            <div class="filterDiv">
              <button class="filterBtns">Annual</button>
              <button class="filterBtns">Aquatic Plant</button>
              <button class="filterBtns">Bamboo</button>
              <button class="filterBtns">Biennial</button>
              <button class="filterBtns">Broadleef evergreen</button>
              <button class="filterBtns">Conifer</button>
              <button class="filterBtns">Fern</button>
              <button class="filterBtns">Flowering cut plant</button>
              <button class="filterBtns">Flowering pot plant</button>
              <button class="filterBtns">Greenhouse produce plant</button>
              <button class="filterBtns">Ground cover</button>
              <button class="filterBtns">Herbaceous perennial</button>
              <button class="filterBtns">Indoor foilage plant</button>
              <button class="filterBtns">Invasive plant</button>
              <button class="filterBtns">Poales(grass-like)</button>
              <button class="filterBtns">Semi-evergreen</button>
              <button class="filterBtns">Shrub-deciduous</button>
              <button class="filterBtns">Succulent-Cacti</button>
              <button class="filterBtns">Tree-deciduous</button>
              <button class="filterBtns">Vine or climber</button>
              <button class="filterBtns">Weed(horticultural)</button>
            </div>
          </div>
          <div class="filterSectionTwo">
            <p class="filterP">Season</p>
            <ul class="filterUl">
              <li class="filterLi">All</li>
              <li class="filterLi">|</li>
              <li class="filterLi">Clear</li>
            </ul>
            <div class="filterDiv">
              <button class="filterBtns">January</button>
              <button class="filterBtns">February</button>
              <button class="filterBtns">March</button>
              <button class="filterBtns">April</button>
              <button class="filterBtns">May</button>
              <button class="filterBtns">June</button>
              <button class="filterBtns">July</button>
              <button class="filterBtns">August</button>
              <button class="filterBtns">September</button>
              <button class="filterBtns">October</button>
              <button class="filterBtns">November</button>
              <button class="filterBtns">December</button>
            </div>
          </div>
          <div class="filterSectionThree">
            <p class="filterP">Color</p>
            <ul class="filterUl">
              <li class="filterLi">All</li>
              <li class="filterLi">|</li>
              <li class="filterLi">Clear</li>
            </ul>
            <div class="filterDiv">
              <button class="filterBtns">White</button>
              <button class="filterBtns">Orange</button>
              <button class="filterBtns">Yellow</button>
              <button class="filterBtns">Green-yellow</button>
              <button class="filterBtns">Green</button>
              <button class="filterBtns">Blue</button>
              <button class="filterBtns">Violet</button>
              <button class="filterBtns">Purple</button>
              <button class="filterBtns">Pink</button>
              <button class="filterBtns">Magenta</button>
              <button class="filterBtns">Red</button>
              <button class="filterBtns">Dark-red</button>
              <button class="filterBtns">Brown</button>
              <button class="filterBtns">Bronze</button>
              <button class="filterBtns">Silver</button>
              <button class="filterBtns">Black</button>
            </div>
          </div>
          <div class="filterSectionFour">
            <p class="filterP">Form</p>
            <ul class="filterUl">
              <li class="filterLi">All</li>
              <li class="filterLi">|</li>
              <li class="filterLi">Clear</li>
            </ul>
            <div class="filterDiv">
              <button class="filterBtns">Climbing</button>
              <button class="filterBtns">Columnar</button>
              <button class="filterBtns">Creeping/Mat-like</button>
              <button class="filterBtns">Irregular</button>
              <button class="filterBtns">Mounded</button>
              <button class="filterBtns">Oval-horizontal</button>
              <button class="filterBtns">Oval-vertical</button>
              <button class="filterBtns">Pyramidal-narrowly</button>
              <button class="filterBtns">Pyramidal-widely</button>
              <button class="filterBtns">Round</button>
              <button class="filterBtns">Vase</button>
              <button class="filterBtns">Weeping</button>
            </div>
          </div>
          <div class="filterSectionFive">
            <p class="filterP">Texture</p>
            <ul class="filterUl">
              <li class="filterLi">All</li>
              <li class="filterLi">|</li>
              <li class="filterLi">Clear</li>
            </ul>
            <div class="filterDiv">
              <button class="filterBtns">Fine</button>
              <button class="filterBtns">Medium-fine</button>
              <button class="filterBtns">Medium</button>
              <button class="filterBtns">Medium-coarse</button>
              <button class="filterBtns">Coarse</button>
              <button class="filterBtns">Very coarse</button>
            </div>
          </div>
          <div class="filterSectionSix">
            <p class="filterP">Locations</p>
            <ul class="filterUl">
              <li class="filterLi">All</li>
              <li class="filterLi">|</li>
              <li class="filterLi">Clear</li>
            </ul>
            <div class="filterDiv">
              <button class="filterBtns">Vancouver</button>
              <button class="filterBtns">Burnaby</button>
              <button class="filterBtns">Coquitlam</button>
              <button class="filterBtns">Surrey</button>
              <button class="filterBtns">North Vancouver</button>
              <button class="filterBtns">White rock</button>
              <button class="filterBtns">Kelowna</button>
            </div>
          </div>
          <div class="clearApply">
            <button class="filterClear">Clear</button>
            <button class="filterApply">Apply</button>
          </div>
        </div></div>
    </header>
  );
}
