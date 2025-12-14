import "./partners.css";

export default function Partners() {
  return (
    <section className="partners-section">
      <h2 className="section-title">Our Partners</h2>

      <div className="logo-slider">
        <div className="logos">
          <img src="src/assets/blue gradient.jpg" />
          <img src="src/assets/blue gradient.jpg" />
          <img src="src/assets/blue gradient.jpg" />
          <img src="src/assets/blue gradient.jpg" />
          <img src="src/assets/blue gradient.jpg" />
        </div>

        {/* duplicate for infinite scroll */}
        <div className="logos">
          <img src="src/assets/blue gradient.jpg" />
          <img src="src/assets/blue gradient.jpg" />
          <img src="src/assets/blue gradient.jpg" />
          <img src="src/assets/blue gradient.jpg" />
          <img src="src/assets/blue gradient.jpg" />
        </div>
      </div>
    </section>
  );
}
