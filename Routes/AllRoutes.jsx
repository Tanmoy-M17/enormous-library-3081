import React from "react";
import { Route, Routes } from "react-router-dom";
import "../App.css";
import { NavbarCategory } from "../Components/NavbarCategory";
import { CarPage } from "../CartegoryPages/CarPage";
import { MotorcyclePage } from "../CartegoryPages/MotorcyclePage";
import { ScootersPage } from "../CartegoryPages/ScootersPage";
import { CommericalVPage } from "../CartegoryPages/CommericalVPage";
import { HouseRentPage } from "../CartegoryPages/HouseRentPage";
import { HouseSalePage } from "../CartegoryPages/HouseSalePage";
import { SingleProductPage } from "../CartegoryPages/SingleProductPage";

export const AllRoutes = () => {
  return (
    <>
      <NavbarCategory />
      <Routes>
        <Route path="/cars" element={<CarPage />} />
        <Route path="/motorcycles" element={<MotorcyclePage />} />
        <Route path="/item/:category/:id" element={<SingleProductPage />} />
        <Route path="/scooters" element={<ScootersPage />} />
        <Route path="/CommericalVPage" element={<CommericalVPage />} />
        <Route path="/houseForRent" element={<HouseRentPage />} />
        <Route path="/houseForSale" element={<HouseSalePage />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
};
