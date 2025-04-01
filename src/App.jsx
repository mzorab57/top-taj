import React from "react";
import { HashRouter as Router } from "react-router-dom";

import AppRoutes from "./routes/AppRoute";

function App() {
  return (
    <div>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
