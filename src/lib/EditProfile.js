import React from "react";
import {useEffect,useState} from 'react';
import axios from 'axios';
import "../styles/editProfile.css";
import Footer from "./Footer";
import Header from "./NavigationBar";
// import NavigationBar from "../src/lib/NavigationBar";
let userEmail = "";
const EditProfile=(props)=>{
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[image,setImage]=useState()
    const[name,setName]=useState()
    const [user, setUser] = useState({
        plantOwner: [],
        imageURL:"",
        library: [],
        name: "",
        email: "",
        password: ""
      });

        useEffect(function loadUserDetail() {
            axios
              .get("/getUserEmail")
              .then(result => {
                console.log(result);
                console.log(result.data);
                userEmail = result.data;
              })
              .then(() => {
                axios.post("/getUserDetails", { email: userEmail }).then(result2 => {
                  console.log(result2);
                  setUser({ ...result2.data });
                });
              })
        
              .catch(err => {
                console.log(err);
              });
          }, []);




        




   
   
   
   
   
    function handleSubmit(event){
        event.preventDefault();
        
        axios.patch("/edit",{email:email,password:password}).then((result) => {
            
            console.log(result);
           
        }).catch((err) => {
            console.log(err);
        });
    }

    return ( 
      <>
      <Header  />
     <div class="EditProfileform-container">
    <div className="imageUpload-EditProfile"
>
       {/* <img   className="EditProfileImg" src={image}  /><br></br> */}
       <img className="EditProfileImg" src={user.imageURL?user.imageURL:"https://images.unsplash.com/photo-1655825056958-0ba58b57b241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} />
             
       </div>
           <form className="EditProfileForm" onSubmit={handleSubmit}> 
           <h1 className="EditProfileTitle">Edit Profile</h1>
         
           <label className="EditProfileEmailLabel" for="email">Email</label>
           <input className="EditProfileEmail" type="email"  name="email"  onChange={(event)=>setEmail(event.target.value)} required/>
           <label className="EditProfilePasswordLabel" for="password">Password</label>
           <input className="EditProfilePassword"  type="password"  name="password" onChange={(event)=>setPassword(event.target.value)} required/> 
           <input type="submit" className="EditProfileSubmit" value="SAVE" />
    </form>
    {image}
    </div>
    <Footer />
    </>
        );    
}
export default EditProfile;
 