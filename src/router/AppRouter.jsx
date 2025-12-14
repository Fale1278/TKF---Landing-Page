import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
// Future pages
import Courses from "../pages/Courses";
import Services from "../pages/Services"
import About from "../pages/About";
import Contact from "../pages/Contact";
// import Login from "../pages/auth/Login";  

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Future routes */}
      <Route path="/courses" element={<Courses />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
}
