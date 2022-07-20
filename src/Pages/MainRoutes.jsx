import React from "react";
import {Routes,Route} from "react-router-dom";
import Homepage from "./Homepage";
import Loginpage from "./Loginpage";
import Sellerpage from "./Sellerpage";
export const MainRoutes=()=>{
    return<>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path='/sell' element={<Sellerpage/>}/>
    </Routes>
    </>
}