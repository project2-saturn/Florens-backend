import ReactDOM from "react-dom"; // installed using npm
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import React from "react";


import HomePage from './HomePage.js';
import SearchPage from './SearchPage.js';
import SignUp from './SignUp';
import Login from './Login';
import EditProfile from './lib/EditProfile.js';
import PlantProfile from './PlantProfile';
import MyLibrary from './MyLibrary';
import AddDiscover from "./AddDiscover.js";


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/search" element={<SearchPage />}/>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/editprofile' element={<EditProfile />} />
            <Route path="/plant" element={<PlantProfile />} />
            <Route path="/mylibrary" element={<MyLibrary />} />
            <Route path="/addplant" element={<AddDiscover/>}/>
            {/* <Route path="/logout" element={<HomePage />} /> */}
            </Routes>
    </BrowserRouter>,


  document.getElementById("react-container")
);
