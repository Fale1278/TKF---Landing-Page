import { useState } from "react";
import "./services.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "AI & Automation Solutions",
      img: "src/assets/ai-service.jpeg",
      desc: "We build intelligent systems for businesses: chatbots, automation pipelines, and AI-driven analytics.",
      features: ["AI Chatbots", "Automation Bots", "Predictive Analytics"]
    },
    {
      id: 2,
      title: "Full-Scale Web Development",
      img: "src/assets/web-service.jpeg",
      desc: "We design and build enterprise-grade web apps, dashboards, and cloud-powered systems.",
      features: ["Frontend Dev", "Backend Dev", "DevOps Deployment"]
    },
    {
      id: 3,
      title: "Cybersecurity Protection",
      img: "src/assets/cyber-service.jpeg",
      desc: "Our cybersecurity suite protects your organization using modern ethical hacking & defense tools.",
      features: ["Pentesting", "Threat Detection", "Security Audits"]
    },
    {
      id: 4,
      title: "Robotics & Embedded Solutions",
      img: "src/assets/robotics-service.jpeg",
      desc: "We build intelligent hardware — autonomous robots, IoT devices, and smart systems.",
      features: ["IoT", "Sensor Systems", "Automation Robots"]
    }
  ];

  return (
    <>
      <Navbar />

      <section className="services-upgraded">
        <div className="header">
          <h1>Our Services</h1>
          <p>Innovative solutions powering Africa’s technological transformation.</p>
        </div>

        {/* GRID */}
        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => setSelectedService(service)}
            >
              <div className="service-img">
                <img src={service.img} alt={service.title} />
              </div>

              <div className="service-body">
                <h2>{service.title}</h2>
                <p>{service.desc}</p>

                <div className="features">
                  {service.features.map((feat, index) => (
                    <span key={index}>{feat}</span>
                  ))}
                </div>

                <button className="read-more-btn">Learn More →</button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedService && (
          <div className="modal-overlay" onClick={() => setSelectedService(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <img src={selectedService.img} className="modal-img" />

              <h2>{selectedService.title}</h2>
              <p>{selectedService.desc}</p>

              <ul className="modal-list">
                {selectedService.features.map((feat, index) => (
                  <li key={index}>✔ {feat}</li>
                ))}
              </ul>

              <Link className="modal-apply" to="/contact">
                Request Service →
              </Link>

              <button className="close-btn" onClick={() => setSelectedService(null)}>
                ✕
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
