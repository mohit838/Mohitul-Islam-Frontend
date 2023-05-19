import React from "react";
import LightProfessionalAnimation from "../views/all-home-version/LightProfessionalAnimation";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<LightProfessionalAnimation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
