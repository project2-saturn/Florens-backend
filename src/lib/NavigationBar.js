import axios from "axios";
import React , {useState, useEffect}from "react";
import {Link} from 'react-router-dom';

export default function() {
  const Login="Login";
const [name,setName]=useState();
  useEffect(function loadUsername(){

axios.get("http://localhost:8080/getUsername").then((result) => {
  console.log(result);
  if(result.data=="")
  {
    setName("Login")
  }
  else{
  setName(result.data)
  }
}).catch((err) => {
  
  console.log(err);
});
},[])




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
        {console.log({name})}
      
       {<Link to="/login">{name}</Link>}
       
        
        </a>
      </div>
    </>
  );
}
