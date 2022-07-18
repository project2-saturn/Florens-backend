import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Header from "../src/lib/Header";
import Features from "../src/lib/Features";
import PlantOfTheDay from "../src/lib/PlantOfTheDay";
import SeasonalPlants from "../src/lib/SeasonalPlants";

import Footer from "../src/lib/Footer";

// import Modal from "../src/lib/Modal"
import "./styles/homepage.css";
import { Link } from "react-router-dom";

// import "./js/advanceSearch";

let data = { firstname: ["parth", "soni"] };

export default function() {
  const [user, setUser] = useState();
 
  useEffect(() => {
    //
    // for chart
    //

    const labels = ["Jan - Mar", "Apr - Jun", "Jul - Sep", "Oct - Dec"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Florens Chart",
          data: [9, 52, 45, 9],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(23,130,45)"
          ],
          hoverOffset: 4
        }
      ]
    };

    const config = {
      type: "pie",
      data: data,
      options: {}
    };

    const myChart = new Chart(document.getElementById("myChart"), config);

    //
    // for chart ends
    //
    const url = `/login/user?email=vi%40gmail.com`;
    console.log(url);
    axios
      .get(url)
      .then(res => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
    // const emailCookie = new String(Cookies.get("username")).replace("@", "%40");
    // const passwordCookie = Cookies.get("password");
  }, []);

  return (
    <>
      <Header user={user} />
      <main className="homePageMain">
        <Features />
        <PlantOfTheDay />
        <div className="chartDiv">
          <canvas id="myChart" className="chartSize"  width="400" height="400"></canvas>
        </div>

        <SeasonalPlants />
        {/* <Modal/> */}
      </main>
      <Footer />
    </>
  );
}
