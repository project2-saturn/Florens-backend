import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Signup from "./signup";

const App=()=>{


    return(
<>
<Router>
<Route path='/signup' element={<Signup />} />

</Router>





</>
    
)

    }

export default App;