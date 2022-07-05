import axios from "axios";

import React , {useState, useEffect}from "react";

import {Link} from 'react-router-dom';

export default function() {
  const Login="Login";
const [name,setName]=useState();
  useEffect(function loadUsername(){

axios.get("/getUsername").then((result) => {
  console.log(result);

  setName(result.data)
  
  
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
        <ul class="headerUl">
             <li><a class="aboutLogNav" href="">About</a></li>
             <li><a class="profileNav" href="">{name}<i class="fas fa-caret-down"></i></a>
                <ul class="profileNavItems">
                    <li> <a href="">Profile</a></li>
                    <li class="headerUlLine"></li>
                    <li><a href="">My Library</a></li>
                    <li class="headerUlLine"></li>
                    <li><a href="">Logout</a></li>
                </ul>
                
            </li>
        </ul>
      </div>
        
         
        
    


    
    </>
  );
}
