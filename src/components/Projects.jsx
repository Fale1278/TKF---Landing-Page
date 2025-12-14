import "./projects.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Featured Projects.</h2>

      <div className="projects-grid">

        <div className="project-card">
          <img src="src/assets/ai.jpeg" alt="AI Lab" />
          <div className="project-info">
            <h3>AI Innovation Lab</h3>
            <p>Building advanced AI models for real-world African challenges.</p>
          </div>
        </div>

        <div className="project-card">
          <img src="src/assets/web.jpeg" alt="Space Research" />
          <div className="project-info">
            <h3>Space Research Program</h3>
            <p>Our aerospace initiative pushing Africa into the space era.</p>
          </div>
        </div>

        <div className="project-card">
          <img src="src/assets/digital.jpeg" alt="Digital Academy" />
          <div className="project-info">
            <h3>Digital Education Hub</h3>
            <p>Upskilling 10,000+ African youths in technology.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
