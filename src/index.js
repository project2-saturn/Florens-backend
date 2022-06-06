
import ReactDOM from 'react-dom'; // installed using npm
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import React from 'react';

import Home from './Home';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    </BrowserRouter>

, document.getElementById("react-container"));
