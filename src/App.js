import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Corporate from "./components/Corporate";
import About from "./components/About";
import Community from "./components/Community";
import Products from "./components/Product";
import Infographs from "./components/Infographs";
import Loader from "./components/Loader"; // Import the loader component
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate website loading (Replace with API calls if needed)
    setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust the time as needed
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/infographs" element={<Infographs />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
