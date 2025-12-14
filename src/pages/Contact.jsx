import { useState } from "react";
import "./contact.css";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <section className="contact-page">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Reach out and let’s build something extraordinary together.</p>
        </div>

        <div className="contact-container">
          <div className="contact-left">
            <h2>Get In Touch</h2>
            <p>
              Whether you need AI solutions, advanced tech systems, cybersecurity, or robotics — we are ready to work with you.
            </p>

            <div className="contact-info">
              <p><strong>Email:</strong> support@kingshima.org</p>
              <p><strong>Phone:</strong> +234 810 000 0000</p>
              <p><strong>Address:</strong> Lagos, Nigeria</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="contact-btn">Send Message →</button>

            {submitted && <p className="success-msg">Message Sent Successfully ✔</p>}
          </form>
        </div>
      </section>
    </>
  );
}