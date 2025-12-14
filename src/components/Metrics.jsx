import { useEffect } from "react";
import "./metrics.css";

export default function Metrics() {

  useEffect(() => {
    const boxes = document.querySelectorAll(".metric-box");
    const numbers = document.querySelectorAll(".metric-number");

    let animated = false; // prevents double-counting

    function countUp(el, target) {
      let start = 0;
      const speed = target / 60; // adjust speed

      function update() {
        start += speed;
        if (start < target) {
          el.textContent = Math.floor(start).toLocaleString();
          requestAnimationFrame(update);
        } else {
          el.textContent = target.toLocaleString();
        }
      }

      update();
    }

    // Scroll Observer
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animated) {
            animated = true;

            boxes.forEach(box => box.classList.add("visible"));

            numbers.forEach(num => {
              countUp(num, parseInt(num.dataset.target));
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(document.querySelector(".metrics"));
  }, []);

  return (
    <section className="metrics">
      <div className="metric-box">
        <h2 className="metric-number" data-target="10000">0</h2>
        <p>Students Trained</p>
      </div>

      <div className="metric-box">
        <h2 className="metric-number" data-target="25">0</h2>
        <p>Industry Partners</p>
      </div>

      <div className="metric-box">
        <h2 className="metric-number" data-target="40">0</h2>
        <p>Courses Offered</p>
      </div>

      <div className="metric-box">
        <h2 className="metric-number" data-target="100">0%</h2>
        <p>Impact Driven</p>
      </div>
    </section>
  );
}
