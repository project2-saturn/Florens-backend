import React, { useEffect, useState } from "react";
import "../styles/profile.css";
import NavigationBar from "./NavigationBar";
import axios from "axios";
import { Link } from "react-router-dom";
import DiscoveryResultCard from "./DiscoveryResultCard";

const MyLibrary = props => {
  let userEmail = "";

  const [results, setResults] = useState([]);

  const [user, setUser] = useState({
    plantOwner: [],
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
      
      <main>
        <div class="container-profile">
          <div class="cards">
            <div class="card-item">
              
              <div class="card-info">
                <h2 class="card-title">{user.name}</h2>
                <p class="card-intro">
                  {user.library.length} plants on library
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <section class="my-discoveries">
          <h2 class="main-title">My Library</h2>
          <div class="discovery-cards">
            {user.library[0] ? (
              user.library.map(element => (
                <DiscoveryResultCard plantID={element} />
              ))
            ) : (
              <></>
            )}
          </div>
        </section>
      </main>
    
    </>
  );
};
export default MyLibrary;
