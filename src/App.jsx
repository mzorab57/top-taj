import React, { useEffect, useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

import AppRoutes from "./routes/AppRoute";

function App() {
  // aw set show service bo awaia katek mouse lasar page lachu la har shwenek bet colse aw hover bkat
  const [menuOpen, setMenuOpen] = useState(false);

  // // Disable right-click context menu
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  // Disable certain keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevent F12
      if (e.keyCode === 123) {
        e.preventDefault();
      }
      // Prevent Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
      if (
        e.ctrlKey &&
        e.shiftKey &&
        (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)
      ) {
        e.preventDefault();
      }
      // Prevent Ctrl+U (View Source)
      if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Router>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AppRoutes setMenuOpen={setMenuOpen} />
      <Footer />
    </Router>
  );
}

export default App;
