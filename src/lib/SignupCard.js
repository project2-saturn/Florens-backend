import Footer from "./Footer.js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AWS from "aws-sdk";

const SignupCard = props => {
//   useEffect(async () => {
//     const s3 = new AWS.S3({
//       accessKeyId: "",
//       secretAccessKey: ""
//     });
//     const imageURL = "../images/florens-logo_green.png";

//     fetch(imageURL)
//       .then(result => result.blob())
//       .then(async (blob) => {
//        const uploadedImage = await s3.upload({
//           Bucket: "florens",
//           Key: "florens-logo_green.png",
//           Body: blob
//         }).promise();
//         console.log(uploadedImage);
//       })
//       .catch(error => console.log(error))
//       .catch(error => console.log(error));
//     // const res = await fetch(imageURL);
//     // const blob = await res.buffer();

//     // const uploadedImage =
//     // await s3
//     //   .upload({
//     //     Bucket: "florens",
//     //     Key: req.files[0].originalFilename,
//     //     Body: blob
//     //   }).promise();

//     // console.log(uploadedImage.Location);
//   }, []);
const navigator=useNavigate();
const[email,setEmail]=useState();
const[password,setPassword]=useState();
const[name,setName]=useState();
const[image,setImage]=useState();
const[picture,setPicture]=useState(null);

// Base64  base64String="";
const handleChangeName=(event)=>{

    setName(event.target.value);

}
const handleChangeEmail=(event)=>{

    setEmail(event.target.value);

}

const handleChangePassword=(event)=>{

    setPassword(event.target.value);

}


const handleImageChange=(event)=>{
console.log(event.target.files[0]);
setImage(URL.createObjectURL(event.target.files[0])  )  ;
   

}




// useEffect(()=>{
// }
//     },[image])


const handleSubmit=(event)=>{
event.preventDefault();
const formData=new FormData();
formData.append('name',name);
formData.append('email',email);
formData.append('password',password);
formData.append('image',picture);

console.log(picture);
axios.post("http://localhost:8080/postUser",formData).then((result) => {
    console.log(result);
    setImage(result.data.image);
    navigator("/login");

}).catch((err) => {
    console.log(err);
});
}


return(

<div className="container-signup">


<form className="form-signup"onSubmit={handleSubmit} enctype="multipart/form-data">     
         <div className="form-div-signup">
         <h1>Create Account</h1>
         <label>Drop your Profile Picture</label><br></br>
            <input type="file" id="upload" hidden />
            <div className="fileBorder">
<label for="upload" className="uploadFile">Choose file</label><br></br></div>
<img src={image}></img>
         <label for="name">Name</label>
         <input type="text" className="text-signup" name="name" required onChange={event=>handleChangeName(event)}/>
         <label for="name">Email</label>
         <input type="email" className="email-signup"  name="email" required onChange={event=>handleChangeEmail(event)}/>
         <label for="password">Password</label>
         <input type="password" className="password-signup"  name="password" required onChange={event=>handleChangePassword(event)}/>
         <input type="submit"  className="submit-signup" value="Signup" />
         <p>Already have an account?<a><b> <Link to="/Login">Login</Link></b></a></p>

{/* {image?.map((imageData)=>{
   const base64String=btoa(String.fromCharCode(...new Uint8Array((imageData.data))));
   console.log(base64String);
})


} */}


 </div>
 </form>
</div>
 



)
}

export default SignupCard;

