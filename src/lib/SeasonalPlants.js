import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchResultCard from "./SearchResultCard";

let month = new Date().getMonth();
console.log(month);
// month = month[0].toUpperCase() +
switch (month) {
  case 0:
    month = "Jan";
    break;
  case 1:
    month = "Feb";
    break;
  case 2:
    month = "Mar";
    break;
  case 3:
    month = "Apr";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "Jun";
    break;
  case 6:
    month = "Jul";
    break;
  case 7:
    month = "Aug";
    break;
  case 8:
    month = "Sep";
    break;
  case 9:
    month = "Oct";
    break;
  case 10:
    month = "Nov";
    break;
  case 11:
    month = "Dec";
    break;
}

export default function() {
  const [plants, setPlants] = useState([]);

  const requestOptions = {
    searchText: "",
    searchSeason: [month]
  };

  console.log(requestOptions);

  useEffect(() => {
    axios
      .post("/searchResults", { ...requestOptions })
      .then(result => {
        console.log(result);
        setPlants([...result.data]);
        // console.log(plants);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <section class="thirdSection">
        <div class="thirdSectionContent">
          <h2 class="thirdSectionHeading">It's Summer in British Columbia!</h2>
          <p>
            Check it out the most common flora you can
            <br />
            see around you
          </p>
        </div>
        <div class="thirdSectionCards">
          {plants[0] ? (
            <>
              <SearchResultCard plant={plants[0]} />
              <SearchResultCard plant={plants[1]} />
              <SearchResultCard plant={plants[2]} />
              <SearchResultCard plant={plants[3]} />
            </>
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
}
