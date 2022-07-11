
import React from "react";
import styles from "../styles/Homepage.css"


const Modal=props=>{


    const handleClose=()=>{
        props.setShow(!(props.show))
      }

    return (
       <>
       {console.log(props.show)}
    <div class="bg-modal" style={{display: props.show ? "flex" : "none" }} >
         <div class="modalContent" >
            {console.log("entered")}
          <form class="modalFourm"  >
            <button id="formCloseBtn" class="formCloseBtn" type="button" onClick={handleClose} >+</button>
            
            {console.log(props.show)}<h1 class="formheading">Have an account at Florens?</h1>
            <p class="formParagraph">Sign in to create your library collection!</p>
           
            <label class="formLabelEmail" for="email">Email</label>
            <input class="formInputEmail" type="email"  name="email" required/>
           
            <label class="formLabelPassword" for="password">Password</label>
            <input class="formInputPassword" type="password"  name="password" required/>
            <p class="forgotPassword"><a>Forgot Password ?</a></p>
            <input class="formSubmit" type="submit" value="LOGIN" />
            
            <p class="newFlorens" >New on Florens?<a> <b>Create Account</b></a></p>
        
   
          </form>
         </div>
    </div>
</>













    )

}
export default Modal;