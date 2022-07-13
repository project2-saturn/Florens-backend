import Footer from "./Footer.js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/myLibrary.css";
import SearchResultCard from "./SearchResultCard.js";
import Cookies from "js-cookie";

const MyLibrary=()=>{
  const[noOfDiscovery,setNoOfDiscovery]=useState();
  const[plantList,setPlantList]=useState([]);
  const [plant,setPlant] = useState({
    description: "",
    name: "",
    id: "",
    photosURL: [],
    scientificName: "",
   
  });

let useremail=Cookies.get("useremail");
let temp ;
    // const navigator=useNavigate();



    useEffect(function loadLibray()
    {
      axios.post("/getLibrary", {useremail :useremail}).then(result => {
        temp = result.data.data;
        console.log(result.data.data);
       setNoOfDiscovery(temp.length);
       console.log(temp.length);
       setPlant({...temp});
   }).catch(error => console.log(error));


   },[]);
        

return(<>
<h2> My Library</h2>
    <div class="searchBarSearch">
        <input
          type="text"
          class="inputSearch"
          placeholder=" &#xf002;      Start typing..."
        />
        <div class="btn btn_common">
          <i class="fas fa-search fa-2x"></i>
        </div>
      </div>

      {noOfDiscovery ?   results.map(element => <SearchResultCard plant={element} />): <h3>"No plant added to the Library"</h3>}
            {/* <SearchResultCard/> */}
              </>
)}
export default MyLibrary;