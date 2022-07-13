import React, { useEffect, useState } from "react";
import  "./styles/login-try.css";


import NavigationBar from "./lib/NavigationBar";
import Search from "./lib/Search";
import Profile from "./lib/Profile";
import Footer from "./lib/Footer";


const Login = props => {

  return (
    <>
 
      <header><NavigationBar />
      </header>
      <main><Profile/>
    
      </main>
      <Footer />
    </>
  );
};

export default Login;
