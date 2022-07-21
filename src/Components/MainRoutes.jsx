import React from "react";
import {Routes,Route} from "react-router-dom";
import RequireAuth from "../Hoc/RequireAuth";
import Homepage from "../Pages/Homepage";
import Loginpage from "../Pages/Loginpage";
import { Post } from "../Pages/Post";
import Sellerpage from "../Pages/Sellerpage";
export const MainRoutes=()=>{
    return<>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path='/sell' element={<Sellerpage/>}/>
        <Route path='/post' element={<Post/>}/>
        
    </Routes>
    </>
}