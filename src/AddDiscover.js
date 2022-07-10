import React, { useEffect, useState } from "react";
import "./styles/AddDiscover.css";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavigationBar from "../src/lib/NavigationBar";
import Footer from "../src/lib/Footer";
import AddDiscoverForm from "../src/lib/AddDiscoverForm";

const AddDiscover = props => {



  return (
    <div className="searchPageDiv">

      <header><NavigationBar />
      </header>
      <main className=""><AddDiscoverForm />
      </main>
      <Footer />
    </div>
  ); 
};

export default AddDiscover;
 