import React from "react";
import {useEffect,useState} from 'react';
import axios from 'axios';
import "../styles/editProfile.css";
// import Footer from "../src/lib/Footer";
// import NavigationBar from "../src/lib/NavigationBar";
const EditProfile=(props)=>{
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    function handleSubmit(event){
        event.preventDefault();
        axios.patch("/edit",{email:email,password:password}).then((result) => {
            
            console.log(result);
           
        }).catch((err) => {
            console.log(err);
        });
    }

    return ( 
     <div class="EditProfileform-container">
           <form className="EditProfileForm" onSubmit={handleSubmit}> 
           <h1 className="EditProfileTitle">Edit Profile</h1>
           <img   className="EditProfileImg"src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" /><br></br>
           <label className="EditProfileEmailLabel" for="email">Email</label>
           <input className="EditProfileEmail" type="email"  name="email"  onChange={(event)=>setEmail(event.target.value)} required/>
           <label className="EditProfilePasswordLabel" for="password">Password</label>
           <input className="EditProfilePassword"  type="password"  name="password" onChange={(event)=>setPassword(event.target.value)} required/> 
           <input type="submit" className="EditProfileSubmit" value="SAVE" />
    </form>
    </div>
        );    
}
export default EditProfile;
 