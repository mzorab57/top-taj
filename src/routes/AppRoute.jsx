import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Hero from "../component/Hero";
import Track from "../component/Track";
import Services from "../pages/Services";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Tracking from "../pages/Tracking";
import Login from "../pages/Login";

const PrivateRoute = ({ children }) => {
  const storedAdminData = localStorage.getItem("adminData");
  return storedAdminData ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero /> <Track />{" "}
            </>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/tracking/:id" element={<Tracking />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
