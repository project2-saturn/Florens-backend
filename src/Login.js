import React, { useEffect, useState } from "react";
import  "./styles/login-try.css";


import NavigationBar from "./lib/NavigationBar";
import Search from "./lib/Search";
import LoginCard from "./lib/LoginCard";
import Footer from "./lib/Footer";


const Login = props => {

  return (
    <>
 
      <header><NavigationBar />
      </header>
      <main><LoginCard/>
    
      </main>
      <Footer />
    </>
  );
};

export default Login;
