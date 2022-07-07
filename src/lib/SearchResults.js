import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchResultCard from "./SearchResultCard";

export default function(props) {
  const [results, setResults] = useState([]);

  useEffect(
    function getResults() {
      console.log("Inside get results");
      console.log(props.searchOptionsApplied);
      axios
        .post("/searchResults", { ...props.searchOptionsApplied })
        .then(result => {
          console.log("inside axios result");
          console.log(result.data);
          setResults(result.data);
        })
        .catch(error => console.log(error));
    },
    [props.searchOptionsApplied]
  );

  return (
    <>
      {/* <div>SearchText: {props.searchOptionsApplied.searchText.toString()}</div>
      <div>SearchType:{props.searchOptionsApplied.searchType.toString()}</div>
      <div>SearchColor:{props.searchOptionsApplied.searchColor.toString()}</div>
      <div>SearchForm:{props.searchOptionsApplied.searchForm.toString()}</div>
      <div>
        SearchLocation:{props.searchOptionsApplied.searchLocation.toString()}
      </div>
      <div>
        SearchSeason:{props.searchOptionsApplied.searchSeason.toString()}
      </div>
      <div>
        SearchTexture:{props.searchOptionsApplied.searchTexture.toString()}
      </div> */}

      <div class="searchListNumber">
        <h2>
          {results.length} Results for:{" "}
          {props.searchOptionsApplied.searchText.toString()}
        </h2>
      </div>
      <section class="searchItemList">
        {results[0] ? (
          results.map(element => <SearchResultCard plant={element} />)
        ) : (
          <></>
        )}
      </section>
    </>
  );
}
