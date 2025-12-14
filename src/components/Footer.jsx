// src/components/Footer.jsx

import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="kf-footer">
      <div className="kf-footer-container">

        {/* Branding */}
        <div className="kf-footer-section">
          <h2 className="kf-footer-logo">The Kingshima Foundation</h2>
          <p className="kf-footer-desc">
            Innovating the future through technology, research, and education.
          </p>
        </div>

        {/* Navigation */}
        <div className="kf-footer-section">
          <h3>Explore.</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Courses */}
        <div className="kf-footer-section">
          <h3>Programs.</h3>
          <ul>
            <li><Link to="/courses?category=ai">Artificial Intelligence</Link></li>
            <li><Link to="/courses?category=software">Software Engineering</Link></li>
            <li><Link to="/courses?category=robotics">Robotics</Link></li>
            <li><Link to="/courses?category=cloud">Cloud & DevOps</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="kf-footer-section">
          <h3>Contact.</h3>
          <p>Email: kingshima001@gmail.com</p>
          <p>Phone: +234 903 9556 992</p>
          <p>Langtang  •  Plateau  •  Nigeria</p>
        </div>
      </div>

      <div className="kf-footer-bottom">
        <p>© {new Date().getFullYear()} The Kingshima Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
}
