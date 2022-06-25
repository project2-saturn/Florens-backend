import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Header from "../src/lib/Header";
import Features from "../src/lib/Features";
import PlantOfTheDay from "../src/lib/PlantOfTheDay";
import SeasonalPlants from "../src/lib/SeasonalPlants";
import Footer from "../src/lib/Footer";
import "./styles/homepage.css";

// import "./js/advanceSearch";

let data = { firstname: ["parth", "soni"] };

import { Link } from "react-router-dom";
export default function() {
  const [user, setUser] = useState();

  useEffect(() => {
    const url = `/login/user?email=vi%40gmail.com`;
    console.log(url);
    axios
      .get(url)
      .then(res => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
 
  }, []);

  return (
    <>
      <Header user={user} />
      <main>
        <Features />
        <PlantOfTheDay />
        <SeasonalPlants />
      </main>
      <Footer />
    </>
  );
}

{

}
