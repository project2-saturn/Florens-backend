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
  <img
    className="headerLogo"
    src="../images/florens-logo_green.png"
    alt="logo"
  />
  <a className="aboutNav" href="">
    About
  </a>

  <a className="loginNav" href="">
  {console.log({name})}
 {  <Link to="/login">Login</Link>}
  
   
  
   </a>


 </div>
  
// else

function logout(){

  cookies.remove("token");
  cookies.remove("name");
  navigator("/");
  
}






  return (
    <>

    {islogged?<div class="navBar">
        <img
          class="headerLogo"
          src="../images/florens-logo_green.png"
          alt="logo"
        />
        <ul class="headerUl">
             <li><a class="aboutLogNav" href="">About</a></li>
             <li><a class="profileNav" href=""><img className="userIconImg" src="../images/user.png" alt="plant" />{name}</a>
                <ul class="profileNavItems">
                    {/* <li> <a href="">Profile</a></li> */}
                    <li><Link to="/editProfile">Profile</Link></li>
                    <li class="headerUlLine"></li>
                    
                    <li><Link to="/mylibrary">My Library</Link></li>
                    <li class="headerUlLine"></li>
                    <li><a href="" onClick={logout}>Logout</a></li>
                </ul>
                
            </li>
        </ul>
      </div>
      :   <div className="navBar">
  <img
    className="headerLogo"
    src="../images/florens-logo_green.png"
    alt="logo"
  />
  <a className="aboutNav" href="">
    About
  </a>

  <a className="loginNav" href="">
  {console.log({name})}
 {  <Link to="/login">Login</Link>}
  
   
  
   </a>


 </div>
    }
    </>
  );
}
