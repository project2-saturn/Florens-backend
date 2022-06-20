import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Header from "./lib/Header";
import Features from "./lib/Features";
import "./styles/homepage.css";

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
    // const emailCookie = new String(Cookies.get("username")).replace("@", "%40");
    // const passwordCookie = Cookies.get("password");
  }, []);

  return (
  <>
    <Header user={user}/>
    <main>
      <Features />
    </main>
  </>);
}

{
  /* <form action="/postUser" method="POST" enctype="multipart/form-data">
        <label>Name : </label>
        <input type="text" name="username" required />
        <label>Profile Image : </label>
        <input type="file" name="image" />
        <button type="submit" className="">
          Create Account
        </button>
      </form>
      <Link to="/search" state={data}>
        Click here to go to searchpage
      </Link> */
}
