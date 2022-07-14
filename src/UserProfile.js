import React, { useEffect, useState } from "react";
import "./styles/profile.css";
import NavigationBar from "./lib/NavigationBar";
import axios from "axios";
import { Link } from "react-router-dom";

const UserProfile = props => {
  let userEmail = "";

  const [user,setUser] =  useState({
      plantOwner : [],
      library : [],
      name: "",
      email : "",
      password: ""
  });
  useEffect(function loadUsername() {
    axios
      .get("/getUserEmail")
      .then(result => {
        console.log(result);
        console.log(result.data);
        userEmail = result.data;
      }).then(() => {
          axios.post("/getUserDetails", {email: userEmail}).then(result2 => {
              console.log(result2);
            setUser( {...result2.data});
          })
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <header>
        <NavigationBar />
        {/* <div class="navBar">
          <img
            class="headerLogo"
            src="../images/florens-logo_green.png"
            alt="logo"
          />
          <a class="aboutNav" href="">
            About
          </a>
          <a class="loginNav" href="">
            Login
          </a>
        </div> */}
      </header>
      <main>
        <div class="container-profile">
          <div class="cards">
            <div class="card-item">
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1655825056958-0ba58b57b241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              </div>
              <div class="card-info">
                <h2 class="card-title">{user.name}</h2>
                <p class="card-intro">{user.library.length} plants on library</p>
              </div>
              <div class="buttons">
                <p class="edit-profile">
                  <Link to="/editprofile">Edit Profile</Link>
                </p>
                <Link to="/addplant">
                <button type="button" class="discovery-button">
                  Add New Discovery
                </button></Link>
              </div>
            </div>
          </div>
        </div>
        <section class="my-discoveries">
          <h2 class="main-title">My discoveries</h2>
          <div class="discovery-cards">
            <div class="discovery-card">
              <div class="discovery-item">
                <div class="discovery-image">
                  <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" />
                </div>
                <div class="card-info">
                  <h2 class="discovery-title">John Smith</h2>
                  <hr class="short-line" />
                  <p class="card-intro">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy…
                  </p>
                </div>
                <div class="buttons">
                  <button type="button" class="discovery-button">
                    Details
                  </button>
                </div>
                <hr class="long-line" />
                <div class="navigation-button">
                  <button class="btn">
                    <i class="fa fa-home"></i> Edit
                  </button>
                  <button class="btn">
                    <i class="fa fa-bars"></i> Delete
                  </button>
                </div>
              </div>
            </div>
            <div class="discovery-card">
              <div class="discovery-item">
                <div class="discovery-image">
                  <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" />
                </div>
                <div class="card-info">
                  <h2 class="discovery-title">John Smith</h2>
                  <hr class="short-line" />
                  <p class="card-intro">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Incidunt, porro.
                  </p>
                </div>
                <div class="buttons">
                  <button type="button" class="discovery-button">
                    Details
                  </button>
                </div>
                <hr class="long-line" />
                <div class="navigation-button">
                  <button class="btn">
                    <i class="fa fa-home"></i> Edit
                  </button>
                  <button class="btn">
                    <i class="fa fa-bars"></i> Delete
                  </button>
                </div>
              </div>
            </div>
            <div class="discovery-card">
              <div class="discovery-item">
                <div class="discovery-image">
                  <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" />
                </div>
                <div class="card-info">
                  <h2 class="discovery-title">John Smith</h2>
                  <hr class="short-line" />
                  <p class="card-intro">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Incidunt, porro.
                  </p>
                </div>
                <div class="buttons">
                  <button type="button" class="discovery-button">
                    Details
                  </button>
                </div>
                <hr class="long-line" />
                <div class="navigation-button">
                  <button class="btn">
                    <i class="fa fa-home"></i> Edit
                  </button>
                  <button class="btn">
                    <i class="fa fa-bars"></i> Delete
                  </button>
                </div>
              </div>
            </div>
            <div class="discovery-card">
              <div class="discovery-item">
                <div class="discovery-image">
                  <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" />
                </div>
                <div class="card-info">
                  <h2 class="discovery-title">John Smith</h2>
                  <hr class="short-line" />
                  <p class="card-intro">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Incidunt, porro.
                  </p>
                </div>
                <div class="buttons">
                  <button type="button" class="discovery-button">
                    Details
                  </button>
                </div>
                <hr class="long-line" />
                <div class="navigation-button">
                  <button class="btn">
                    <i class="fa fa-home"></i> Edit
                  </button>
                  <button class="btn">
                    <i class="fa fa-bars"></i> Delete
                  </button>
                </div>
              </div>
            </div>
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
