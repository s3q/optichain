import React, { useEffect } from "react";
import "../css/about.css";

const skills = [
  "Team Management",
  "Team Leadership",
  "Communication",
  "Business Relationship Management",
  "Leadership",
  "Credit Recovery",
  "Collection Strategy",
  "Business Analysis",
  "Mergers & Acquisitions (M&A)",
];
// const achievements = [
//   "Generated $2M+ in new business",
//   "Reduced client churn by 25%",
//   "Streamlined loan approval process",
// ];

const achievements = [

];

const skill2s = [
  { name: "Team Management", level: 90 },
  { name: "Team Leadership", level: 85 },
  { name: "Communication", level: 80 },
  { name: "Business Relationship Management", level: 75 },
  { name: "Leadership", level: 88 },
  { name: "Credit Recovery", level: 70 },
  { name: "Collection Strategy", level: 88 },
  { name: "Business Analysis", level: 80 },
  { name: "Mergers & Acquisitions (M&A)", level: 80 },
];

const experiences = [
  {
    title: "Collecting data",
    company: "",
    period: "2015-2022",
    description:
      "From top 5 companies in automative industry and over 100 product each company",
  },
  {
    title: "Devloping over 100 AI models",
    company: "Founded project by SQU-ENG",
    period: "2022 - 2025",
    description:
      "Accurcy of cost prediction 97% and delivery time 98%, over 5 scientific Articles.",
  },
  {
    title: "Starting with team",
    company: "Teachstar_ Startup weekend",
    period: "2025 - present",
    description:
      "The project have already tested by 30% of data, start working in MVP.",
  },
];

export default function () {

  return (
    <div className="aboutme-container">
      <div className="title-divider">About AI Model</div>
      {/* Main About Section */}
      <div className="personal-container">
        {/* Personal Info */}
        <div className="personal-info" style={{}}>
          <h3 className="sph ">Brief</h3>
          <div className="spcard">
            <p
              style={{
                marginBottom: "20px",
              }}
            >
              
              We have collected data from the top 5 companies and over 100 products from each manufacturer.
            </p>
            <p>
Competitive Advantage:
Based on published scientific research with accurate results (with less than 1% accuracy in cost forecasting).
Targets the market gap in on-demand production systems.
Continuously learns from real-world operational data.
Easily integrates with existing company systems.
            </p>
          </div>
        </div>


{/* Quick Stats */}
<div className="stat-container">
  <h3 className="sph" style={{ fontSize: "28px", marginBottom: "20px" }}>
    Quick Stats
  </h3>

  <div className="spcard">
    <div className="grid-stat stats-section"> {/* <— observe this */}
      <div style={{ textAlign: "center" }}>
        <h2 className="sph stat-number" data-target="20" data-suffix="+">0</h2>
        <p>Companies involved</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2 className="sph stat-number" data-target="15" data-suffix="+">0</h2>
        <p>Years Experience</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2 className="sph stat-number" data-target="100" data-suffix="+">0</h2>
        <p>Number of Workshop</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2 className="sph stat-number" data-target="98" data-suffix="%">0</h2>
        <p>Accuercy</p>
      </div>
    </div>
  </div>
</div>

      </div>


{/* 
      <div style={{ marginBottom: "60px" }}>
        <h3
          className="sph"
          style={{
            marginBottom: "30px",
          }}
        >
          Technical Skills
        </h3>
        <div className="tech-grid" style={{}}>
          {skill2s.map((skill, index) => (
            <div key={index} className="spcard">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <h6>{skill.name}</h6>
                <span style={{ color: "#ffccb5" }}>{skill.level}%</span>
              </div>
              <div className="process">
                <div
                  style={{
                    width: `${skill.level}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div> 
      
      */}

      {/* Experience Timeline */}
      <div>
        <h3
          className="sph"
          style={{
            marginBottom: "30px",
          }}
        >
          Professional Journey
        </h3>
        <div className="timeline-container" style={{}}>
          {/* Timeline Line */}
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <div
              className="timeline-card"
              key={index}
              style={{
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              }}
            >
              {/* Timeline Node */}
              <div className="timeline-node" style={{}} />

              {/* Content Card */}
              <div
                className="timeline-content"
                style={{
                  marginLeft: index % 2 === 0 ? "0" : "auto",
                  marginRight: index % 2 === 0 ? "auto" : "0",
                }}
              >
                <h4
                  style={{
                    color: "#ffccb5",
                    fontSize: "20px",
                    marginBottom: "8px",
                  }}
                >
                  {exp.title}
                </h4>
                <div
                  style={{
                    color: "#a06043",
                    fontSize: "16px",
                    marginBottom: "5px",
                  }}
                >
                  {exp.company}
                </div>
                <div
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "14px",
                    marginBottom: "15px",
                  }}
                >
                  {exp.period}
                </div>
                <p style={{}}>{exp.description}</p>
                <div>
                  <h6
                    style={{
                      color: "#f8fafc",
                      marginBottom: "10px",
                    }}
                  >
                    Key Achievements:
                  </h6>
                  <ul className="timeline-ach">
                    {achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>
                        <span style={{}}>✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="spcard">
        <h3
          style={{
            color: "#b86d4a",
            fontSize: "24px",
            marginBottom: "20px",
            textShadow: "0 0 10px rgba(184, 109, 74, 0.5)",
          }}
        >
          Let's Work Together
        </h3>
        <p
          style={{
            color: "rgba(255, 255, 255, 0.74)",
            fontSize: "16px",
            marginBottom: "30px",
            maxWidth: "600px",
            margin: "0 auto 30px",
          }}
        >
          we are always excited to take on new challenges and collaborate on
          innovative projects. Let's bring your ideas to life!
        </p>
        <button
          id="works"
          style={{
            backgroundColor: "transparent",
            border: "#a06043 solid 2px",
            color: "#ffccb5",
            padding: "12px 30px",
            borderRadius: "25px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textDecoration: "none",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#a06043";
            e.target.style.color = "white";
            e.target.style.boxShadow =
              "0px 0px 35px -1px rgba(160, 96, 67, 0.72)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#ffccb5";
            e.target.style.boxShadow = "none";
          }}
        >
          Get In Touch
        </button>
      </div>
    </div>
  );
}
