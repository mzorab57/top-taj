import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Hero from "../component/Hero";
import Track from "../component/Track";
import Services from "../pages/Services";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Tracking from "../pages/Tracking";
import Login from "../pages/Login";
import Main from "../layouts/Main";

const PrivateRoute = ({ children }) => {
  const storedAdminData = localStorage.getItem("adminData");
  return storedAdminData ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route
            index
            element={
              <>
                <Hero /> <Track />
              </>
            }
          />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="tracking/:id" element={<Tracking />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
