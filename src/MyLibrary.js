import React, { useEffect, useState } from "react";
import "./styles/signup.css";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavigationBar from "./lib/NavigationBar";

import SignUpCard from "./lib/SignupCard";
import Footer from "./lib/Footer";
import MyLibrary from "./lib/MyLibrary";


const SignUp = props => {
      // const location = useLocation();
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
      <main><MyLibrary/>
      {/* <SearchResults /> */}
      </main>
      <Footer />
    </>
  );
};
export default SignUp;


