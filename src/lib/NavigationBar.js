import axios from "axios";

import React , {useState, useEffect}from "react";

import {Link} from 'react-router-dom';
import cookies from 'react-cookies' 
import { useNavigate } from "react-router-dom";

export default function() {
  const Login="Login";
const [name,setName]=useState();
const [islogged,setIsLogged]=useState(true);
const navigator = useNavigate();
  useEffect(function loadUsername(){

axios.get("/getUsername").then((result) => {
  console.log(result);
  if(result.data=="")
  {
    setName("Login")
    setIsLogged(false);
  }
  else{
  setName(result.data)
  
  }
}).catch((err) => {
  
  console.log(err);
});
},[])


  if({name}=="Login")
  
  <div className="navBar">
  <Link to ="/"><img class="headerLogo" src="../images/florens-logo_green.png" alt="logo"/></Link>
  <input type="checkbox" id="menu-bar"/>
  <label className="headerCheckboxLabel" for="menu-bar">Menu</label>
  <ul class="headerUl">
    <li><a className="aboutNav" href=""> <Link to="/about">About</Link></a></li>
    <li><a className="loginNav" href="">{console.log({name})}{  <Link to="/login">Login</Link>}</a></li>
  </ul>
 </div>
  
// else

function logout(){

  cookies.remove("token");
  cookies.remove("name");
  cookies.remove("useremail");
  cookies.remove("email");
  navigator("/");
  
}





 
  return (
    <>

    {islogged?<div class="navBar">
    <Link to ="/"><img class="headerLogo" src="../images/florens-logo_green.png" alt="logo"/></Link>
        <input type="checkbox" id="menu-bar"/>
        <label className="headerCheckboxLabel" for="menu-bar">Menu</label>
        <ul class="headerUl">
             <li><a class="aboutLogNav" href=""><Link to="/about">About</Link></a></li>
             <li><a class="profileNav" href=""><img className="userIconImg" src="../images/user.png" alt="plant" />{name}</a>
                <ul class="profileNavItems">
                    {/* <li> <a href="">Profile</a></li> */}
                    <li><Link to="/userprofile">Profile</Link></li>
                    <li class="headerUlLine"></li>
                    
                    <li><Link to="/mylibrary">My Library</Link></li>
                    <li class="headerUlLine"></li>
                    <li><a href="" onClick={logout}>Logout</a></li>
                </ul>
                
            </li>
        </ul>
      </div>
      :   <div className="navBar">
      <Link to ="/"><img class="headerLogo" src="../images/florens-logo_green.png" alt="logo"/></Link>
  <input type="checkbox" id="menu-bar"/>
  <label className="headerCheckboxLabel" for="menu-bar">Menu</label>
  <ul class="headerUl">
    <li><a className="aboutNav" href=""><Link to="/about">About</Link></a></li>
    <li> <a className="loginNav" href="">{console.log({name})}{  <Link to="/login">Login</Link>}</a></li>
  </ul>
 </div>
    }
    </>
  );
}
