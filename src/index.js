
import ReactDOM from 'react-dom'; // installed using npm
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import React from 'react';

import HomePage from './HomePage.js';
import SearchPage from './SearchPage.js';
import SignUp from './SignUp';
import Login from './Login';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="search" element={<SearchPage />}/>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            </Routes>
    </BrowserRouter>

, document.getElementById("react-container"));
