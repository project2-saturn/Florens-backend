import React, { useEffect, useState } from "react";
import "./styles/about.css";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavigationBar from "./lib/NavigationBar";

import SignUpCard from "./lib/SignupCard";
import Footer from "./lib/Footer";
import MyLibrary from "./lib/MyLibrary";

import AboutContent from "./lib/AboutContent";


const About = props => {

  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <AboutContent/>
      </main>
      <Footer />
    </>
  );
};
export default About;


