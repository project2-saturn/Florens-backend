import React, {useEffect, useState} from "react";
export default function(){
  
    return(
        <form action="/postUser" method="POST" enctype="multipart/form-data">
        <label>Name : </label>
        <input type="text" name="username" required />
        <label>Profile Image : </label>
        <input type="file" name="image" />
        <button type="submit" className="">Create Account</button>
      </form>
      //  <p> Hello</p>
    )
}