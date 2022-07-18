import React, { useState, useEffect } from "react";
import axios from "axios";

import { useLocation } from "react-router-dom";
import SearchResults from "./SearchResults";
import SearchFilter from "./SearchFilter";

let allSearchOptions = {};

axios.get("/searchOption").then(results => {
  allSearchOptions = { ...results.data };
  allSearchOptions.searchSeason = [
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
});

export default function(props) {
  const handleAccordionButtonToggle = function() {

    document.querySelectorAll(".accordion_button").forEach(button => {
      const accordionContent = button.nextElementSibling;
      // button.classList.toggle('header_background');
      button.classList.toggle("accordion_button--active");
      if (button.classList.contains("accordion_button--active")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        accordionContent.style.borderBottom = "solid #0d3f3f 0.5px";
        
      } else {
        accordionContent.style.maxHeight = 0;
        accordionContent.style.borderBottom = "solid #0d3f3f 0px";
      }
    });
  };

  // let allSearchOptions = {};

  // useEffect(function loadAllResults() {
  //   axios.get("/searchOption").then(results => {
  //     // console.log(results);
  //     allSearchOptions = { ...results };
  //     console.log(allSearchOptions);
  //   });
  // }, []);

  // console.log(allSearchOptions);
  const [searchOptions, setSearchOptions] = useState({
    searchText: "",
    searchType: [],
    searchColor: [],
    searchForm: [],
    searchLocation: [],
    searchSeason: [],
    searchTexture: []
  });

  const [searchOptionsApplied, setSearchOptionsApplied] = useState({
    searchText: "",
    searchType: [],
    searchColor: [],
    searchForm: [],
    searchLocation: [],
    searchSeason: [],
    searchTexture: []
  });

  const location = useLocation();
  const data = location.state;
  console.log(data);

  useEffect(function loadSearchOptions() {
    if (data) {
      setSearchOptions({ ...data });
      setSearchOptionsApplied({ ...data });
    }
  }, []);
  // setSearchOptions({...data});

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
      {/* <div>SearchText: {searchOptions.searchText.toString()}</div>

      <div>SearchType:{searchOptions.searchType.toString()}</div>
      <div>SearchColor:{searchOptions.searchColor.toString()}</div>
      <div>SearchForm:{searchOptions.searchForm.toString()}</div>
      <div>SearchLocation:{searchOptions.searchLocation.toString()}</div>
      <div>SearchSeason:{searchOptions.searchSeason.toString()}</div>
      <div>SearchTexture:{searchOptions.searchTexture.toString()}</div> */}
      <div class="searchBarSearch">
        <input
          name="searchText"
          type="text"
          class="inputSearch"
          placeholder=" &#xf002;      Start typing..."
          defaultValue={data != null ? data.searchText : ""}
          onChange={handleSearchOptionsTextChange}
        />
        <div
          class="btn_btn_common_searchpage"
          onClick={() => setSearchOptionsApplied({ ...searchOptions })}
        >
          <i class="fas fa-search fa-2x"></i>
        </div>
      </div>
      <div class="accordion">
        <button
          type="button"
          class="accordion_button"
          onClick={handleAccordionButtonToggle}
        >
          Advanced Search
        </button>
        <div class="accordion_content">
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
            <button
              class="filterApply"
              onClick={() => setSearchOptionsApplied({ ...searchOptions })}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
      <SearchResults searchOptionsApplied={searchOptionsApplied} />
    </>
  );
}
