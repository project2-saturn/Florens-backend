import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function() {
  const Login = "Login";
  const [name, setName] = useState();
  useEffect(function loadUsername() {
    axios
      .get("/getUsername")
      .then(result => {
        console.log(result);
        if (result.data == "") {
          setName("Login");
        } else {
          setName(result.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="navBar">
        <img
          className="headerLogo"
          src="../images/florens-logo_green.png"
          alt="logo"
        />
        <a className="aboutNav" href="">
          About
        </a>
        <Link to="/login" className="loginNav">
          {name != "" ? name : "Login"}
        </Link>
      </div>
    </>
  );
}
