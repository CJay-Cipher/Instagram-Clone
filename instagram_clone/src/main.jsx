import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx"; // Adjust the path as needed

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:username" element={<Profile />} /> {/* Dynamic route for the profile */}
      </Routes>
    </Router>
  </StrictMode>
);
