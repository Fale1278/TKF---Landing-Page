import { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import FeatureCard from "../components/FeatureCard";

import Team from "../components/Team";
import Partners from "../components/Partners";
import Projects from "../components/Projects";
import "./home.css";

export default function Home() {
 
  // Floating animation + scroll fade-in effects
  useEffect(() => {
    const floatItems = document.querySelectorAll(".float-up");
    const cards = document.querySelectorAll(".feature-card");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    floatItems.forEach(item => observer.observe(item));
    cards.forEach(card => observer.observe(card));
  }, []);

  return (
    <MainLayout>
      <Hero />

      <Metrics />

      <Projects />
      <Team />
      <Partners />

      {/* Feature Section */}
      <section className="features float-up">
        <FeatureCard 
          title="AI & Robotics" 
          desc="Pioneering intelligent systems for Africa’s future." 
        />
        <FeatureCard 
          title="Space Tech" 
          desc="Researching advanced aerospace and engineering systems." 
        />
        <FeatureCard 
          title="Digital Education" 
          desc="Training the next generation of African innovators." 
        />
      </section>
    </MainLayout>
  );
}
