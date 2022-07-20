import React from "react";
import { Route, Routes } from "react-router-dom";
import "../App.css";
import { NavbarRoutes } from "../Components/NavbarRoutes";
import { Cars } from "../CartegoryPages/Cars";
import { Motorcycles } from "../CartegoryPages/Motorcycles";
import { Scooters } from "../CartegoryPages/Scooters";
import { Commerical } from "../CartegoryPages/Commerical";
import { HouseForRent } from "../CartegoryPages/HouseForRent";
import { HouseForSale } from "../CartegoryPages/HouseForSale";
import { SingleProductPage } from "../CartegoryPages/SingleProductPage";

export const AllRoutes = () => {
  return (
    <>
      <NavbarRoutes />
      <Routes>
        <Route path="/cars" element={<Cars />} />
        <Route path="/motorcycles" element={<Motorcycles />} />
        <Route path="/item/:category/:id" element={<SingleProductPage />} />
        <Route path="/scooters" element={<Scooters />} />
        <Route path="/commerical" element={<Commerical />} />
        <Route path="/houseForRent" element={<HouseForRent />} />
        <Route path="/houseForSale" element={<HouseForSale />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
};
