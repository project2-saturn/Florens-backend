import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import axios from "axios";
import SearchFilter from "./SearchFilter";

export default function(props) {
  const navigateTo = useNavigate();
  const [allSearchOptions, setAllSearchOptions] = useState({});

  useEffect(function loadAllOptionsObject() {
    axios.get("/searchOption").then(results => {
      let temp = { ...results.data };
      temp.searchSeason = [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "Novemeber",
        "December"
      ];

      setAllSearchOptions({ ...temp });
      console.log(allSearchOptions);
    });
  }, []);

  const handleAccordionButtonToggle = function() {
    console.log(allSearchOptions);
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

  const [searchOptions, setSearchOptions] = useState({
    searchText: "",
    searchType: [],
    searchColor: [],
    searchForm: [],
    searchLocation: [],
    searchSeason: [],
    searchTexture: []
  });

  const handleSearchOptionsTextChange = function(event) {
    let updatedOptions = { ...searchOptions };
    updatedOptions[event.target.name] = event.target.value;
    setSearchOptions(updatedOptions);
  };

  const handleSearchOptionsChange = function(event, name) {
    let updatedOptions = { ...searchOptions };
    // updatedOptions[event.target.name] = event.target.value;
    // setSearchOptions(updatedOptions);
    // if (updatedOptions[name].includes(event.target.value)) {

    // }
    // console.log(updatedOptions[name]);
    if (!updatedOptions[name].includes(event.target.value)) {
      console.log("1");
      updatedOptions[name].push(event.target.value);

      console.log(updatedOptions[name]);
    } else {
      console.log("2");
      console.log(event.target.value);
      updatedOptions[name] = updatedOptions[name].filter(
        e => e != event.target.value
      );

      console.log(updatedOptions[name]);
    }

    setSearchOptions(updatedOptions);
    console.log(searchOptions);
  };
  // if (data != null)

  const handleSelectAllOption = function(event, name) {
    console.log("here");
    console.log(name);
    console.log(allSearchOptions);
    let updatedOptions = { ...searchOptions };
    updatedOptions[name] = [];
    updatedOptions[name] = [...allSearchOptions[name]];
    console.log(updatedOptions[name]);
    setSearchOptions(updatedOptions);
  };

  const handleClearAllOption = function(event, name) {
    // console.log("here");
    console.log(name);
    console.log(allSearchOptions);
    let updatedOptions = { ...searchOptions };
    updatedOptions[name] = [];
    // updatedOptions[name] = [...allSearchOptions[name]];
    console.log(updatedOptions[name]);
    setSearchOptions(updatedOptions);
  };

  return (
    <>
      <div>SearchText: {searchOptions.searchText.toString()}</div>

      <div>SearchType:{searchOptions.searchType.toString()}</div>
      <div>SearchColor:{searchOptions.searchColor.toString()}</div>
      <div>SearchForm:{searchOptions.searchForm.toString()}</div>
      <div>SearchLocation:{searchOptions.searchLocation.toString()}</div>
      <div>SearchSeason:{searchOptions.searchSeason.toString()}</div>
      <div>SearchTexture:{searchOptions.searchTexture.toString()}</div>
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
            name="searchText"
            type="text"
            class="inputSearch"
            placeholder=" &#xf002;      Start typing..."
            onChange={handleSearchOptionsTextChange}
          />
          <Link to="/search" state={searchOptions}>
            <div class="btnHome btn_common">
              <i class="fas fa-search fa-2x"></i>
            </div>
          </Link>
          
        </div>
        <div class="accordion">
          <button
            type="button"
            class="accordion_buttonHome"
            onClick={handleAccordionButtonToggle}
          >
            Advanced Search
          </button>
          <div class="accordion_contentHome">
            <div class="filterSectionOne">
              <SearchFilter
                title={"Plant Type"}
                options={allSearchOptions.searchType}
                selectedOptions={searchOptions.searchType}
                name={"searchType"}
                handleSearchOptionsChange={handleSearchOptionsChange}
                handleSelectAllOption={handleSelectAllOption}
                handleClearAllOption={handleClearAllOption}
              />
            </div>

            <div class="filterSectionTwo">
              <SearchFilter
                title={"Season"}
                options={allSearchOptions.searchSeason}

                selectedOptions={searchOptions.searchSeason}
                name={"searchSeason"}
                handleSearchOptionsChange={handleSearchOptionsChange}
                handleSelectAllOption={handleSelectAllOption}
                handleClearAllOption={handleClearAllOption}
              />
            </div>
            <div class="filterSectionThree">
              <SearchFilter
                title={"Color"}
                options={allSearchOptions.searchColor}

                selectedOptions={searchOptions.searchColor}
                name={"searchColor"}
                handleSearchOptionsChange={handleSearchOptionsChange}
                handleSelectAllOption={handleSelectAllOption}
                handleClearAllOption={handleClearAllOption}
              />
            </div>
            <div class="filterSectionFour">
              <SearchFilter
                title={"Form"}
                options={allSearchOptions.searchForm}

                selectedOptions={searchOptions.searchForm}
                name={"searchForm"}
                handleSearchOptionsChange={handleSearchOptionsChange}
                handleSelectAllOption={handleSelectAllOption}
                handleClearAllOption={handleClearAllOption}
              />
            </div>
            <div class="filterSectionFive">
              <SearchFilter
                title={"Texture"}
                options={allSearchOptions.searchTexture}

                selectedOptions={searchOptions.searchTexture}
                name={"searchTexture"}
                handleSearchOptionsChange={handleSearchOptionsChange}
                handleSelectAllOption={handleSelectAllOption}
                handleClearAllOption={handleClearAllOption}
              />
            </div>
            <div class="filterSectionSix">
              <SearchFilter
                title={"Locations"}
                options={allSearchOptions.searchLocation}

                selectedOptions={searchOptions.searchLocation}
                name={"searchLocation"}
                handleSearchOptionsChange={handleSearchOptionsChange}
                handleSelectAllOption={handleSelectAllOption}
                handleClearAllOption={handleClearAllOption}
              />
            </div>
            <div class="clearApply">
              <button
                class="filterClear"
                onClick={() =>
                  setSearchOptions({
                    searchText: searchOptions.searchText,
                    searchType: [],
                    searchColor: [],
                    searchForm: [],
                    searchLocation: [],
                    searchSeason: [],
                    searchTexture: []
                  })
                }
              >
                Clear
              </button>
              <Link to="/search" state={searchOptions}>
              <button
                class="filterApply"
                
              >
                Apply
              </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
