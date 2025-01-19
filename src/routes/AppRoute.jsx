import React from "react";
import { Route, Routes } from "react-router-dom";

import Hero from "../component/Hero";
import Track from "../component/Track";
import Work from "../component/Work";
import ServicesSection from "../pages/ServicesSection";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Tracking  from "../pages/Tracking";

const AppRoutes = () => {
  return (
    // aw set show service bo awaia katek mouse lasar page lachu la har shwenek bet colse aw hover bkat
    <div>
      <Routes>
        <Route
          index
          path="/"
          element={
            <>
              <Hero />
              <Track />
              <Work />
            </>
          }
        />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tracking/:id" element={<Tracking />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
