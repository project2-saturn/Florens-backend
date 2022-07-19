import React, { useEffect, useState } from "react";
import "./styles/profile.css";
import NavigationBar from "./lib/NavigationBar";
import axios from "axios";
import { Link } from "react-router-dom";
import DiscoveryResultCard from "./lib/DiscoveryResultCard";

const UserProfile = props => {
  let userEmail = "";

  const [results, setResults] = useState([]);

  const [user, setUser] = useState({
    plantOwner: [],
    imageURL:"",
    library: [],
    name: "",
    email: "",
    password: ""
  });
  useEffect(function loadUsername() {
    axios
      .get("/getUserEmail")
      .then(result => {
        console.log(result);
        console.log(result.data);
        userEmail = result.data;
      })
      .then(() => {
        axios.post("/getUserDetails", { email: userEmail }).then(result2 => {
          console.log(result2);
          setUser({ ...result2.data });
        });
      })

      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <div class="container-profile">
          <div class="cards">
            <div class="card-item">
              <div class="card-image">
                <img src={user.imageURL?user.imageURL:"https://images.unsplash.com/photo-1655825056958-0ba58b57b241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} />
              </div>
              <div class="card-info">
                <h2 class="card-title">{user.name}</h2>
                <div className="profileHead">
                <img src="../images/addBtn.png"></img>
                <p class="card-intro">
                  {user.library.length} plants on library
                </p>
                </div>
              </div>
              <div class="buttons">
                <p class="edit-profile">
                  <Link to="/editprofile">Edit Profile</Link>
                </p>
                <Link to="/addplant">
                  <button type="button" class="discovery-button">
                    Add New Discovery
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <h1>
          {user.plantOwner.toString() != null ? (
            user.plantOwner.toString()
          ) : (
            <></>
          )}
        </h1>{" "} */}
        <section class="my-discoveries">
          <h2 class="main-title">My discoveries</h2>
          <div class="discovery-cards">
            {user.plantOwner[0] ? (
              user.plantOwner.map(element => (
                <DiscoveryResultCard plantID={element} />
              ))
            ) : (
              <></>
            )}
          </div>
        </section>
      </main>
      <footer>
        <div class="footerFirstDiv">
          <img class="footerLogo" src="../images/Group_641.png" alt="logo" />
          <div class="footerUni">
            <img class="footerUniLogo" src="../images/KPU-Logo.png" alt="KPU" />
            <p>
              Plant Database from KPU:
              <br />
              https://plantdatabase.kpu.ca
            </p>
          </div>
          <p class="logoCap">
            Foliage background and Leaf illustration vector created by
            rawpixel.com - www.freepik.com
          </p>
          <div class="line"></div>
          <p class="footerSecondPone">Copyright Florens 2022</p>
          <p class="footerSecondPtwo">Developed by Team Saturn - Langara</p>
        </div>
      </footer>
    </>
  );
};
export default UserProfile;
