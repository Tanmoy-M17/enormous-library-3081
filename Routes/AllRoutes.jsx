import React from "react";
import { Route, Routes } from "react-router-dom";

import "../App.css";
import { Cars } from "../Products/Cars";
import { Motorcycles } from "../Products/Motorcycles";
import { Mobilephones } from "../Products/Mobilephones";
import { Scooters } from "../Products/Scooters";
import { Commerical } from "../Products/Commerical";
import { HouseForRent } from "../Products/HouseForRent";
import { HouseForSale } from "../Products/HouseForSale";
import { NavbarRoutes } from "../Components/NavbarRoutes";

export const AllRoutes = () => {
  return (
    <>
      <NavbarRoutes />
      <Routes>
        <Route path="/cars" element={<Cars />} />
        <Route path="/motorcycles" element={<Motorcycles />} />
        <Route path="/mobilephones" element={<Mobilephones />} />
        <Route path="/scooters" element={<Scooters />} />
        <Route path="/commerical" element={<Commerical />} />
        <Route path="/houseForRent" element={<HouseForRent />} />
        <Route path="/houseForSale" element={<HouseForSale />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
};
