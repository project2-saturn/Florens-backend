import React, { useEffect, useState } from "react";

import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';


const SearchPage = (props) => {
    const location = useLocation();
const data = location.state;
console.log(data);
    // console.log(state);
    return (
      <>
      <h1>HEloo.. this is the search page</h1>
      <h2>{data.firstname[0]} </h2>
      <Link to="/">Click here to go to homepage</Link>
    </>
    )};
  
  export default SearchPage;