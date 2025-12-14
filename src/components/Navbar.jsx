import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">Kingshima Foundation</div>

      {/* Mobile menu */}
      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav links */}
      <nav className={`nav-links ${open ? "nav-active" : ""}`}>
        <a href="/">Home</a>
        <a href="/courses">Courses</a>
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <button className="login-btn">Login</button>
      </nav>

      {/* Overlay for closing menu */}
      {open && <div className="menu-overlay" onClick={() => setOpen(false)} />}
    </header>
  );
}
