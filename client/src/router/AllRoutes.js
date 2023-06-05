import React from "react";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import HomeLightSidebarTwo from "../views/all-home-version/HomeLightProfessional2";
import Login from "../adminDashboard/auth/Login";
import Registration from "../adminDashboard/auth/Registration";
import Dashboard from "../adminDashboard/dashboard/Dashboard";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<HomeLightSidebarTwo />} />

        {/* Admin Dashboard Paths */}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
