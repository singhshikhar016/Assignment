import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/index.jsx";
import ManageVariety from "./pages/manage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/manage" element={<ManageVariety />} />
      </Routes>
    </Router>
  );
}

export default App;
