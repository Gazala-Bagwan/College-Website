import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavBar from "./components1/MainNavbar1.jsx";
import Footer from "./components1/Footer";
import HomePage from "./Pages/HomePage1.jsx"; // Fixing case sensitivity
import AboutUs from "./Pages/AboutUs.jsx";  // Fixing the incorrect file name
import Department from "./Pages/Department.jsx";
import Graduate from "./Pages/Graduate.jsx";
import Postgraduate from "./Pages/Postgraduate.jsx";
import Addon from "./Pages/Addon.jsx";


function App() {
  return (
    <Router>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/department" element={<Department />} />
        <Route path="/graduate" element={<Graduate />} />
        <Route path="/postgraduate"element={<Postgraduate />} />
        <Route path="/addon"element={<Addon />} />
        <Route path="/about" element={<AboutUs />} />
       </Routes>
      <Footer />
    </Router>
  );
}

export default App;
