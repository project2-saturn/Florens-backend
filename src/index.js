
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

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/search" element={<SearchPage />}/>

        </Routes>
    </BrowserRouter>

, document.getElementById("react-container"));
