import React, { Component, useEffect, useState } from "react";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import "../css/home.css";
import profileImg from "../assets/main.png";
import SkillsCylinder from "../components/SkillsCylinder";
import TypewriterEffect from "../components/TypewriterEffect";
import WorksPage from "./WorksPage";
import AboutPage from "./AboutPage";
import FooterHomePage from "./FooterHomePage";
    import { useNavigate } from 'react-router-dom';

import "../js/home.js"
import ContactMe from "./ContactPage.jsx";

const styles = {
  main: {
    background: "",
  },
  navlink: {},
};

const skills = [
  "Predict price and time"
];

const skill2s = [
    { name: "Team Management", level: 90 },
    { name:  "Team Leadership", level: 85 },
    { name:  "Communication", level: 80 },
    { name:  "Business Relationship Management", level: 75 },
    { name: "Leadership", level: 88 },
    { name:  "Credit Recovery", level: 70 },
    { name: "Collection Strategy", level: 88 },
    { name:  "Business Analysis", level: 80 },
    { name:  "Mergers & Acquisitions (M&A)", level: 80 },
  ];

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading frontend development team, building scalable React applications'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2022', 
      description: 'Developed web applications using MERN stack, improved performance by 40%'
    },
    {
      title: 'Junior Developer',
      company: 'StartupCo',
      period: '2019 - 2020',
      description: 'Built responsive websites and learned modern development practices'
    }
  ];

export default function () {
  const [skill, setSkill] = useState(0);
   const [inputs, setInputs] = useState({ A1: 0, A2: 0, A3:0, A4: 0, A5: 0, A6: 0, A7: 0, A8: 0, A9: 0, A10: 0 });
  const [result, setResult] = useState(null);
const projects = [
  {
    id: 1,
    title: "Predicting cost & time tool",
    category: "AI",
    image:
      "https://4058900.fs1.hubspotusercontent-na1.net/hubfs/4058900/Imported_Blog_Media/Time-Cost-ScopeStack-hero-1.jpg",
    description:
      "AI model will help the small and meduim companies (SME) in predecting the cost and time per component",
    technologies: ["pytorch", "Node.js", "Google cloud"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
]
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/run-model", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      console.error(err);
    } finally {
      // setLoading(false);
    }
  };
  const navigate = useNavigate();


  useEffect(() => {
    const interval = setInterval(() => {
      setSkill((prev) => (skills.length - 1 == prev ? 0 : prev + 1));
    }, 2000); // change skill every 2s
    return () => clearInterval(interval);
  }, []);

   useEffect(() => {
    const cards = document.querySelectorAll(".spcard, .spcard-light, .timeline-content");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showing-inscroll");
          observer.unobserve(entry.target); // run once
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));

    // Cleanup on unmount
    return () => observer.disconnect();
  }, []);

useEffect(() => {
  // document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".stats-section");
  console.log(sections);

  const animateCounter = (el, target, suffix, duration) => {
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const value = Math.min(
        Math.floor((progress / duration) * target),
        target
      );
      el.textContent = value + (suffix || "");

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll(".stat-number");
          counters.forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            const suffix = counter.getAttribute("data-suffix");
            const duration = +counter.getAttribute("data-duration") || 2000; // default 2s
            animateCounter(counter, target, suffix,  duration);
          });

          observer.unobserve(entry.target); // Run once per section
        }
      });
    },
    { threshold: 0.3 } // Trigger when 30% visible
  );

  sections.forEach((section) => observer.observe(section));
// });
 }, []);


  return (
    <div className="main ">
      
      <Navbar expand="lg" className="px-3 navbar " data-bs-theme="dark" >
        <Container>
          {/* Brand with image and name */}
          <Navbar.Brand
            href="#home"
            className="d-flex align-items-center nav-title"
          >
            {/* <img
              src={profileImg} // replace with your image URL
              alt="Yunos"
              width="40"
              height="40"
              className="d-inline-block align-top me-2" 
            /> */}
            Optichain
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {" "}
              {/* Push links to the right */}
              <Nav.Link href="/#home" className="mx-2 nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="/#about" className="mx-2 nav-link">
                About
              </Nav.Link>
              <Nav.Link href="/#works" className="mx-2 nav-link">
                Works
              </Nav.Link>
              <Nav.Link href="#link4" className="mx-2 nav-link">
                Blogs
              </Nav.Link>
              <Nav.Link href="#link5" className="mx-2 nav-link">
                Service
              </Nav.Link>
              <Nav.Link href="#link6" className="mx-2 nav-link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="overflow-auto h-100 body" id="#home">
        <div  id="home"></div>
        <div className="leading-container ">
          <div >
  

            {/* <img
              src={profileImg}
              alt=""
              className="profile-img"
            />  */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 800 800"
            >
              <rect fill="#000000" width="800" height="800" />
              <g fill-opacity="1">
                <circle fill="#000000" cx="400" cy="400" r="600" />
                <circle fill="#001b25" cx="400" cy="400" r="500" />
                <circle fill="#022a35" cx="400" cy="400" r="400" />
                <circle fill="#163a46" cx="400" cy="400" r="300" />
                <circle fill="#294b58" cx="400" cy="400" r="200" />
                <circle fill="#3B5D6A" cx="400" cy="400" r="100" />
              </g>
            </svg> */}
          </div>
          <div className=" flex-column" style={{ display: "flex", flex: 1 }}>
            <div className="leading-info ">
              <h1 className="big-name">Opti-Chain </h1>
              <h1 className="big-name">AI Prediction</h1>
              <h3 className="skills-text">
              Current avilable services 
              <ul>
                <li>
              <span className="font-mono text-3xl">1) {skills[0]}</span>

                </li>
              </ul>
              </h3>
              <div></div>

              <p>
              Our platform can provide many services to companies that have a production line or car workshops.
              <p>
                Intelligent Prediction Engine (AI Engine): Built on your cost-response neural model.

              </p>
              </p>


              <ul>

                <h2>Working on and coming soon</h2>
             
<li>
Digital Dashboard: Displays SCOR (Score of Performance) indicators and instant alerts.
</li>
<li>
Integration Hub: Connects the system with ERP and IoT to collect real-time data.
</li>
  
<li>

Optimization Module: Provides instant recommendations such as rescheduling or changing suppliers.
</li>
<li>

User Interface: Via a dedicated web and mobile application for logistics and operations managers.
</li>

              </ul>
            </div>

            
          </div>
        </div>
        <h2></h2>
         <h1 className="text-primary fw-bold mb-4">        
  
      </h1>

      {/* Projects Grid */}
      <div className="proj-grid" style={{}}>
        {projects.map((project, index) => (
          <div className="proj-card" key={project.id}>
            {/* Featured Badge */}
            {project.featured && (
              <div
                className="card-edge"
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  backgroundColor: "#a06043",
                  color: "white",
                  padding: "5px 12px",
                  borderRadius: "15px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  zIndex: 2,
                  boxShadow: "0 0 15px rgba(160, 96, 67, 0.7)",
                }}
              >
                FEATURED
              </div>
            )}

            {/* Project Image */}
            <div className="card-img">
              <img src={project.image} alt={project.title} />
              {/* Overlay on hover */}
              <div className="card-overlay">
                <button
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    padding: "12px 20px",
                    borderRadius: "25px",
                    color: "#a06043",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "14px",
                    transition: "transform 0.2s ease",
                  }}
                >
                  Live Demo
                </button>
                <button className="button-outline">GitHub</button>
              </div>
            </div>

            {/* Project Content */}
            <div className="card-content" style={{}}>
              <h5 className="sph-light">{project.title}</h5>

              <p className="content-desc">{project.description}</p>

              {/* Technologies */}
              {/* Technologies */}
              <div className="technologies-container">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="technology-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                }}
              >
                <button
                  className="button-outline"
                  onClick={() => {
                    navigate("/service/1")
                  }}
                  style={{
                    flex: 1,
                  }}
                >
                  Use it Now
                </button>
                {/* <button
                  className="custom-btn-outline"
                  style={{
                    flex: 1,
                  }}
                >
                  Source Code
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
        
      </div>
    </div>
  );
}
