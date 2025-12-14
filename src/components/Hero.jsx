import { useEffect, useRef } from "react";
import "./hero.css";

export default function Hero() {
  const typingRef = useRef(null);

  useEffect(() => {
    const el = typingRef.current;
    const text = "FAITH + TECH + INNOVATION";
    let i = 0;
    let isDeleting = false;

    function typeLoop() {
      if (!isDeleting) {
          el.textContent = text.substring(0, i + 1);
          i++;

          if (i === text.length) {
            setTimeout(() => (isDeleting = true), 1000);
          }
      } else {
          el.textContent = text.substring(0, i - 1);
          i--;

          if (i === 0) {
            isDeleting = false;
          }
      }

      const speed = isDeleting ? 40 : 70;
      setTimeout(typeLoop, speed);
    }

    typeLoop();
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="tech-lines"></div>
      <canvas id="particle-canvas"></canvas>

      <div className="hero-content">
        <h1 ref={typingRef} id="typing-text"></h1>

        <p>
          The Kingshima Foundation is building Africa’s next-generation 
          technological ecosystem — education, innovation, research, and impact.
        </p>

        <button className="cta-btn">Explore Our Courses</button>
      </div>
    </section>
  );
}
