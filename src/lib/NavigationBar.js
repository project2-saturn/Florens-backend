import React from "react";
import {Link} from 'react-router-dom';

export default function() {
  return (
    <>
      <div class="navBar">
        <img
          class="headerLogo"
          src="../images/florens-logo_green.png"
          alt="logo"
        />
        <a class="aboutNav" href="">
          About
        </a>
        <a class="loginNav" href="">
        <Link to="/login">Login</Link>
        </a>
      </div>
    </>
  );
}
