import React, { useEffect, useState } from "react";
import "./styles/searchpage.css";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavigationBar from "../src/lib/NavigationBar";
import Search from "../src/lib/Search";
import SearchResults from "../src/lib/SearchResults";
import Footer from "../src/lib/Footer";
import SearchSearchPage from "../src/lib/SearchSearchPage";

const SearchPage = props => {
  //     const location = useLocation();
  // const data = location.state;
  // console.log(data);
  // console.log(state);
  return (
    <>
      {/* <h1>HEloo.. this is the search page</h1> */}
      {/* <h2>{data.firstname[0]} </h2> */}
      {/* <Link to="/">Click here to go to homepage</Link> */}
      <header><NavigationBar />
      </header>
      <main><SearchSearchPage />
      {/* <SearchResults /> */}
      </main>
      <Footer />
    </>
  );
};

export default SearchPage;
