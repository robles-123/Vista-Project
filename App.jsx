import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import DetailsPage from "./components/DetailsPage";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact"; // Import the Contact component

function App() {
  return (
    <Router>
      <div className="app">
        <Header /> {/* Header remains consistent across pages */}
        <Routes>
          <Route path="/" element={<HeroSection />} /> {/* Home route */}
          <Route path="/signup" element={<SignUp />} /> {/* Signup route */}
          <Route path="/login" element={<Login />} /> {/* Login route */}
          <Route path="/details" element={<DetailsPage />} /> {/* Details page */}
          <Route path="/home" element={<HomePage />} /> {/* HomePage route */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
