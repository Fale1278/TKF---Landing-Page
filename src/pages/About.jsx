import Navbar from "../components/Navbar";
import "./about.css";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="about-page">
        {/* HERO */}
        <div className="about-hero">
          <h1>About <span>Kingshima Foundation</span></h1>
          <p>Empowering Africa’s tech future through innovation, research, and digital excellence.</p>
        </div>

        {/* INTRO */}
        <div className="about-intro">
          <div className="intro-img">
            <img src="src/assets/about_main.jpeg" alt="Kingshima Foundation" />
          </div>

          <div className="intro-text">
            <h2>Who We Are</h2>
            <p>The Kingshima Foundation is Africa’s leading tech initiative, nurturing the next generation of innovators, engineers, and creators.</p>
            <p>Through AI, Robotics, Software Engineering, Cybersecurity, and Research programs, we’re building Africa’s technological future.</p>
            <blockquote>“Inventing Africa’s tomorrow, today.”</blockquote>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="values">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Pushing boundaries through creativity, research, and advanced problem-solving.</p>
            </div>
            <div className="value-card">
              <h3>Excellence</h3>
              <p>World-class programs aligned with industry standards and demand.</p>
            </div>
            <div className="value-card">
              <h3>Impact</h3>
              <p>Creating solutions that transform lives, communities, and the global tech ecosystem.</p>
            </div>
            <div className="value-card">
              <h3>Collaboration</h3>
              <p>Partnering with innovators and organizations to expand opportunities.</p>
            </div>
          </div>
        </div>

        {/* MISSION & VISION */}
        <div className="mission">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>To provide hands-on training, innovative education, global mentorship, and real-world project experience, equipping Africans to lead future industries.</p>
            <h2>Our Vision</h2>
            <p>To be Africa’s premier tech foundation — a center for innovation, research, creativity, and the development of technologies shaping the next century.</p>
          </div>

          <div className="mission-img">
            <img src="src/assets/mission.jpeg" alt="Mission & Vision" />
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta">
          <h2>Join the Kingshima Movement</h2>
          <p>Be part of Africa’s digital revolution and shape the tech landscape of tomorrow.</p>
          <a href="/courses" className="cta-button">Explore Programs →</a>
        </div>
      </section>
    </>
  );
}