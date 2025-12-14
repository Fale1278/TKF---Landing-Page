import { useState } from "react";
import "./courses.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: "AI & Machine Learning",
      category: "AI",
      duration: "12 Weeks",
      level: "Advanced",
      img: "src/assets/ml.jpeg",
      desc: "Master deep learning, neural networks, data science, and intelligent automation."
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      category: "Web",
      duration: "10 Weeks",
      level: "Beginner–Intermediate",
      img: "src/assets/full.jpeg",
      desc: "Learn HTML, CSS, JavaScript, React, Node.js, APIs, and cloud deployment workflows."
    },
    {
      id: 3,
      title: "Cybersecurity & Ethical Hacking",
      category: "Cybersecurity",
      duration: "8 Weeks",
      level: "Intermediate",
      img: "src/assets/cyber.jpeg",
      desc: "Penetration testing, forensics, exploit analysis, OSINT, and security engineering."
    },
    {
      id: 4,
      title: "Robotics & Embedded Systems",
      category: "Robotics",
      duration: "14 Weeks",
      level: "Advanced",
      img: "src/assets/embedded.jpeg",
      desc: "Build autonomous robots with sensors, motors, and microcontrollers."
    }
  ];

  // FILTER LOGIC
  const filteredCourses = courses.filter((c) => {
    const matchesCategory =
      activeCategory === "All" || c.category === activeCategory;

    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
    <Navbar />
    <section className="courses-upgraded">
      <div className="header">
        <h1>Explore Our Courses</h1>
        <p>Advance your tech career with hands-on expert training.</p>
      </div>

      {/* TABS */}
      <div className="category-tabs">
        {["All", "AI", "Web", "Cybersecurity", "Robotics"].map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "tab active" : "tab"}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SEARCH */}
      <div className="course-controls">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* GRID */}
      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <div
            className="course-card enhanced"
            key={course.id}
            onClick={() => setSelectedCourse(course)}
          >
            <div className="course-img">
              <img src={course.img} alt={course.title} />
            </div>

            <div className="course-body">
              <h2>{course.title}</h2>
              <p className="desc">{course.desc}</p>

              <div className="meta">
                <span>{course.level}</span>
                <span>{course.duration}</span>
              </div>

              <Link
                className="apply-btn"
                to={`/apply/${course.id}`}
                onClick={(e) => e.stopPropagation()}
              >
                Apply →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedCourse && (
        <div className="modal-overlay" onClick={() => setSelectedCourse(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedCourse.img} className="modal-img" />

            <h2>{selectedCourse.title}</h2>
            <p>{selectedCourse.desc}</p>

            <div className="meta-modal">
              <span>{selectedCourse.level}</span>
              <span>{selectedCourse.duration}</span>
            </div>

            <Link className="modal-apply" to={`/apply/${selectedCourse.id}`}>
              Apply Now →
            </Link>

            <button className="close-btn" onClick={() => setSelectedCourse(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
    </>
  );
}
