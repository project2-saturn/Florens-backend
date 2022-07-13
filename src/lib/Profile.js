import React from "react";
import {useEffect,useState} from 'react';
import axios from 'axios';
import {Buffer} from 'buffer';
import "../styles/editProfile.css";
import Cookies from "js-cookie";
import SearchResultCard from "./SearchResultCard";
import {Link} from 'react-router-dom';


const Profile=(props)=>{
const[noOfPlants,setNoOfPlants]=useState();
const[libraryPlants,setLibraryPlants]=useState();

let name=Cookies.get("name");
let email=Cookies.get("useremail");



axios.post("/getLibrary",{email:email}).then((result) => {

    console.log(result.length)
    setNoOfPlants(result.length);
    setLibraryPlants(result);
    
}).catch((err) => {
    
});

return(
<>



    <img   className="EditProfileImg" src="" /><br></br>
    <h3>{name} </h3>
    <p>{`${noOfPlants} in library`}</p>
    <button><Link to ="editprofile"> Edit Profile</Link></button>
    <button><Link to ="adddiscovery"> Add New Discovery</Link></button>
    {libraryPlants.map(element => <SearchResultCard plant={element} />)}















</>

)















}
 export default Profile;