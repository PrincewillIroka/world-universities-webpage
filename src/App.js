import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import Privacy from "./components/Privacy";
import ContactUs from "./components/ContactUs";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}
