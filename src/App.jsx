import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

import AppRoutes from "./routes/AppRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes  />
      <Footer />
    </Router>
  );
}

export default App;
