import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
export default App;
