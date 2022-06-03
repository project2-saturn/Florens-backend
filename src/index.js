
import ReactDOM from 'react-dom'; // installed using npm
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import React from 'react';

import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
        </Routes>
    </BrowserRouter>

, document.getElementById("react-container"));
