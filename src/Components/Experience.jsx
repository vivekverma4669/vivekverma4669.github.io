import React, { useContext } from "react";
import { AuthTheme } from "../AuthThemeProvider";
import "./experience.css";

const Experience = () => {
  const { theme } = useContext(AuthTheme);
  const accentColor = theme === "day" ? "rgb(0, 85, 169)" : "#32de84";
  const cardBg = theme === "day" ? "#fff" : "rgb(18, 28, 44)";
  const textColor = theme === "day" ? "#333" : "#ddd";
  const borderColor =
    theme === "day" ? "rgba(0,85,169,0.25)" : "rgba(50,222,132,0.25)";
  const mutedColor = theme === "day" ? "#666" : "#aaa";
  const tagBg =
    theme === "day" ? "rgba(0,85,169,0.07)" : "rgba(50,222,132,0.07)";
  const blockBg =
    theme === "day" ? "rgba(0,85,169,0.03)" : "rgba(18,28,44,0.8)";

  return (
    <div
      id="experience"
      className="reveal"
      style={{
        backgroundColor: theme === "day" ? null : "rgb(16, 22,34)",
        padding: "20px 0 20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: accentColor,
          textShadow: "2px 2px 2px black",
          fontSize: "50px",
          marginBottom: "36px",
        }}
      >
        Experience
      </h1>

      <div className="exp-container">
        <div
          className="exp-company-block"
          style={{ borderLeftColor: accentColor, backgroundColor: blockBg }}
        >
          <div className="exp-company-header">
            <div
              className="exp-company-logo"
              style={{ background: accentColor }}
            >
              G
            </div>
            <div>
              <h2 style={{ color: accentColor, margin: 0, fontSize: "22px" }}>
                Galific Solutions
              </h2>
              <span style={{ color: mutedColor, fontSize: "13px" }}>
                Pune, Maharashtra · Remote &nbsp;·&nbsp; ~2 years
              </span>
            </div>
          </div>

          {/* Full Stack Engineer */}
          <div
            className="exp-role-card"
            style={{ backgroundColor: cardBg, borderColor }}
          >
            <div className="exp-role-header">
              <div>
                <h3 style={{ color: textColor, margin: 0, fontSize: "17px" }}>
                  Full Stack Engineer
                </h3>
                <span
                  className="exp-badge"
                  style={{ backgroundColor: accentColor }}
                >
                  Full-time
                </span>
              </div>
              <span style={{ color: mutedColor, fontSize: "13px" }}>
                Dec 2024 – Present &nbsp;·&nbsp; 1 yr 7 mos
              </span>
            </div>
            <ul className="exp-points" style={{ color: textColor }}>
              <li>
                Built a full-scale <strong>Hospital Management System</strong>{" "}
                with dedicated panels for{" "}
                <strong>
                  Admin, Doctor, Nurse, Pharmacy, Lab, IPD, Billing, and
                  Appointments
                </strong>{" "}
                — all with role-based access control
              </li>
              <li>
                Engineered a{" "}
                <strong>recommendation & prescription module</strong> with
                AI-powered insights and an in-app <strong>chatbot</strong>{" "}
                across every panel for real-time clinical decision support
              </li>
              <li>
                Built a <strong>React Native patient app</strong> (live on
                Google Play) featuring an AI-driven diagnostic flow —
                context-aware questions in an option-based format that
                auto-populate based on patient history, reducing manual input
                for doctors
              </li>
              <li>
                Developed <strong>custom configurable PDF generation</strong>{" "}
                for prescriptions, discharge summaries, billing invoices, and
                lab reports — fully config-driven per hospital setup
              </li>
              <li>
                Implemented <strong>Playwright automation</strong> for
                end-to-end workflow testing and process automation across HMS
                modules
              </li>

              <li>
                Designed and developed the{" "}
                <strong>
                  <a
                    href="https://doctat.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "inherit" }}
                  >
                    landing page
                  </a>
                </strong>{" "}
                — a production-grade marketing site for a healthcare product
                used by 60+ hospitals, built with React.js and optimized for
                performance and SEO
              </li>
              <li>
                Contributed to <strong>Clanner</strong> — Clanner reads
                LinkedIn, X, YouTube, HN, writes the post, designs the carousel,
                schedules it.
              </li>
            </ul>
            <div className="exp-tags">
              {[
                "React.js",
                "React Native",
                "Next.js",
                "Node.js",
                "Redux",
                "TypeScript",
                "Groq AI",
                "Gemini AI",
                "Playwright",
              ].map((t) => (
                <span
                  key={t}
                  className="exp-tag"
                  style={{
                    backgroundColor: tagBg,
                    color: accentColor,
                    borderColor,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend Developer Intern */}
          <div
            className="exp-role-card"
            style={{ backgroundColor: cardBg, borderColor }}
          >
            <div className="exp-role-header">
              <div>
                <h3 style={{ color: textColor, margin: 0, fontSize: "17px" }}>
                  Frontend Developer
                </h3>
                <span className="exp-badge" style={{ backgroundColor: "#777" }}>
                  Internship
                </span>
              </div>
              <span style={{ color: mutedColor, fontSize: "13px" }}>
                Aug 2024 – Nov 2024 &nbsp;·&nbsp; 4 mos
              </span>
            </div>
            <ul className="exp-points" style={{ color: textColor }}>
              <li>
                Contributed to real-world client projects during the internship
                at Galific
              </li>
              <li>
                Built responsive, accessible UI components using React.js and
                modern CSS
              </li>
              <li>
                Gained hands-on experience with Redux state management and REST
                API integration
              </li>
            </ul>
            <div className="exp-tags">
              {["JavaScript", "React.js", "Redux", "CSS3", "HTML5"].map((t) => (
                <span
                  key={t}
                  className="exp-tag"
                  style={{
                    backgroundColor: tagBg,
                    color: accentColor,
                    borderColor,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
