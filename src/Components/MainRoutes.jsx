import React from "react";
import {Routes,Route} from "react-router-dom";
import RequireAuth from "../Hoc/RequireAuth";
import Homepage from "../Pages/Homepage";
import Loginpage from "../Pages/Loginpage";
import Sellerpage from "../Pages/Sellerpage";
export const MainRoutes=()=>{
    return<>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path='/sell' element={
            <RequireAuth>
        <Sellerpage/>
        </RequireAuth>}/>
    </Routes>
    </>
}