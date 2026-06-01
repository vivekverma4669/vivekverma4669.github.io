import "./project.css";
import Electron from "./Videos/Electron.mp4";
import Elogo from "./Videos/eLogo.jpg";
import Leo from "./Videos/Leo.mp4";
import { useContext } from "react";
import { AuthTheme } from "../AuthThemeProvider";
import { FaGithub } from "react-icons/fa";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiCss,
  SiRedux,
  SiHtml5,
  SiRazorpay,
  SiFirebase,
  SiTypescript,
  SiNodedotjs,
  SiDocker,
  SiRedis,
} from "react-icons/si";

const Project = () => {
  const { theme } = useContext(AuthTheme);
  const ghColor = theme === "day" ? "#111" : "#fff";
  const cardBg = theme === "day" ? null : "rgb(18, 32, 32)";

  return (
    <div
      style={{
        backgroundColor: theme === "day" ? null : "rgb(16, 22,34)",
        marginTop: "-33px",
      }}
    >
      <br />
      <br />
      <h1
        id="projects"
        style={{
          textAlign: "center",
          color: theme === "day" ? "rgb(0, 85, 169)" : "#32de84",
          textShadow: "2px 2px 2px black",
          fontSize: "50px",
        }}
      >
        My Projects
      </h1>

      <div className="project">
        {/* ElevateCRM */}
        <div
          className="project-card"
          style={{ backgroundColor: cardBg, borderRadius: "10px" }}
        >
          <video loop autoPlay muted controls>
            <source src={Electron} type="video/mp4" />
          </video>
          <div className="des">
            <div
              className="link"
              style={{ color: theme === "day" ? "" : "silver" }}
            >
              <a
                style={{ color: theme === "day" ? "" : "whitesmoke" }}
                className="project-deployed-link"
                href="https://elevate-crm-sigma.vercel.app/login"
                target="blank"
              >
                <h2>🌐 Preview</h2>
              </a>
              <a
                style={{ color: theme === "day" ? "" : "whitesmoke" }}
                className="project-github-link"
                href="https://github.com/vivekverma4669/ElevateCRM"
                target="blank"
              >
                <h2>
                  <FaGithub
                    size={20}
                    color={ghColor}
                    style={{ verticalAlign: "middle", marginRight: "4px" }}
                  />{" "}
                  Github
                </h2>
              </a>
            </div>
            <h2
              className="project-title"
              style={{
                color: theme === "day" ? "" : "limegreen",
                display: "flex",
                width: "fit-content",
                margin: "auto",
              }}
            >
              ElevateCRM
            </h2>
            <h4
              style={{
                color: theme === "day" ? "rgb(0, 85, 160)" : "limegreen",
              }}
              className="project-description"
            >
              A full-featured CRM SaaS platform — manage leads, customer
              relationships, and sales pipelines with real-time dashboards,
              role-based access, Docker containerization, Redis caching, and
              Groq AI-powered chat &amp; insights.
            </h4>
            <div className="project-tech-stack">
              <SiReact size={28} color="#61DAFB" />
              <SiTypescript size={28} color="#3178C6" />
              <SiNodedotjs size={28} color="#339933" />
              <SiMongodb size={28} color="#47A248" />
              <SiExpress size={28} color={ghColor} />
              <SiRedux size={28} color="#764ABC" />
              <SiDocker size={28} color="#2496ED" />
              <SiRedis size={28} color="#DC382D" />
              <span className="clerk-badge" style={{ background: "#FF6B35" }}>
                Groq AI
              </span>
            </div>
            <h2
              style={{
                textAlign: "center",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              <span
                style={{
                  color: theme === "day" ? "rgb(0, 85, 160)" : "limegreen",
                }}
              >
                Personal Project{" "}
                <PersonIcon
                  style={{ verticalAlign: "middle", fontSize: "18px" }}
                />
              </span>
            </h2>
          </div>
        </div>

        {/* Hiremind */}
        <div
          className="project-card"
          style={{ backgroundColor: cardBg, borderRadius: "10px" }}
        >
          <video loop autoPlay muted controls>
            <source src={Leo} type="video/mp4" />
          </video>
          <div className="des">
            <div
              className="link"
              style={{ color: theme === "day" ? "" : "silver" }}
            >
              <a
                style={{ color: theme === "day" ? "" : "whitesmoke" }}
                className="project-deployed-link"
                href="https://hiremind-gamma.vercel.app/dashboard"
                target="blank"
              >
                <h2>🌐 Preview</h2>
              </a>
              <a
                style={{ color: theme === "day" ? "" : "whitesmoke" }}
                className="project-github-link"
                href="https://github.com/vivekverma4669/hiremind"
                target="blank"
              >
                <h2>
                  <FaGithub
                    size={20}
                    color={ghColor}
                    style={{ verticalAlign: "middle", marginRight: "4px" }}
                  />{" "}
                  Github
                </h2>
              </a>
            </div>
            <h2
              className="project-title"
              style={{
                color: theme === "day" ? "" : "limegreen",
                display: "flex",
                width: "fit-content",
                margin: "auto",
              }}
            >
              Hiremind
            </h2>
            <h4
              style={{
                color: theme === "day" ? "rgb(0, 85, 160)" : "limegreen",
              }}
              className="project-description"
            >
              A smart recruitment platform — job postings, candidate tracking,
              interview scheduling, and onboarding in one place, with Groq
              AI-powered candidate screening and job recommendations. Auth by
              Clerk.
            </h4>
            <div className="project-tech-stack">
              <SiReact size={28} color="#61DAFB" />
              <SiJavascript size={28} color="#F7DF1E" />
              <SiNodedotjs size={28} color="#339933" />
              <SiMongodb size={28} color="#47A248" />
              <SiExpress size={28} color={ghColor} />
              <SiRedux size={28} color="#764ABC" />
              <span className="clerk-badge" style={{ background: "#FF6B35" }}>
                Groq AI
              </span>
              <span className="clerk-badge">Clerk</span>
            </div>
            <h2
              style={{
                textAlign: "center",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              <span
                style={{
                  color: theme === "day" ? "rgb(0, 85, 160)" : "limegreen",
                }}
              >
                Personal Project{" "}
                <PersonIcon
                  style={{ verticalAlign: "middle", fontSize: "18px" }}
                />
              </span>
            </h2>
          </div>
        </div>

        {/* Leo Bloggers */}
        <div
          className="project-card"
          style={{ backgroundColor: cardBg, borderRadius: "10px" }}
        >
          <video loop autoPlay controls>
            <source src={Leo} type="video/mp4" />
          </video>
          <div className="des">
            <div
              className="link"
              style={{ color: theme === "day" ? "" : "silver" }}
            >
              <a
                style={{ color: theme === "day" ? "" : "whitesmoke" }}
                className="project-deployed-link"
                href="https://leo-bliggers.vercel.app/"
                target="blank"
              >
                <h2>🌐 preview</h2>
              </a>
              <a
                style={{ color: theme === "day" ? "" : "whitesmoke" }}
                className="project-github-link"
                href="https://github.com/vivekverma4669/blog-app"
                target="blank"
              >
                <h2>
                  <FaGithub
                    size={20}
                    color={ghColor}
                    style={{ verticalAlign: "middle", marginRight: "4px" }}
                  />{" "}
                  Github
                </h2>
              </a>
            </div>
            <h2
              className="project-title"
              style={{
                color: theme === "day" ? "" : "limegreen",
                display: "flex",
                width: "fit-content",
                margin: "auto",
              }}
            >
              Leo Bloggers
            </h2>
            <h4
              style={{
                color: theme === "day" ? "rgb(0, 85, 160)" : "limegreen",
              }}
              className="project-description"
            >
              A dynamic blogging platform built with the MERN stack — rich text
              editor, auth system, and a seamless reader experience for sharing
              stories.
            </h4>
            <div className="project-tech-stack">
              <SiReact size={28} color="#61DAFB" />
              <SiJavascript size={28} color="#F7DF1E" />
              <SiMongodb size={28} color="#47A248" />
              <SiExpress size={28} color={ghColor} />
              <SiCss size={28} color="#1572B6" />
            </div>
            <h2
              style={{
                textAlign: "center",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              <span
                style={{
                  color: theme === "day" ? "rgb(0, 85, 160)" : "limegreen",
                }}
              >
                Personal Project{" "}
                <PersonIcon
                  style={{ verticalAlign: "middle", fontSize: "18px" }}
                />
              </span>
            </h2>
          </div>
        </div>

        {/* Electron */}
        <div
          className="project-card"
          style={{ backgroundColor: cardBg, borderRadius: "10px" }}
        >
          <video loop autoPlay controls>
            <source src={Electron} type="video/mp4" />
          </video>
          <div className="des">
            <div className="link">
              <a
                style={{ color: theme === "day" ? "" : "whitesmoke" }}
                className="project-deployed-link"
                href="https://64dcee8acb8ee428e7b63db9--charming-bienenstitch-d89c77.netlify.app/"
                target="blank"
              >
                <h2>🌐 preview</h2>
              </a>
              <a
                style={{ color: theme === "day" ? "" : "whitesmoke" }}
                className="project-github-link"
                href="https://github.com/RajshreeJaiswal/Electron-ecommerce-website"
                target="blank"
              >
                <h2>
                  <FaGithub
                    size={20}
                    color={ghColor}
                    style={{ verticalAlign: "middle", marginRight: "4px" }}
                  />{" "}
                  Github
                </h2>
              </a>
            </div>
            <h2
              className="project-title"
              style={{ color: theme === "day" ? "" : "limegreen" }}
            >
              <img
                style={{ width: "90px", marginRight: "20px" }}
                src={Elogo}
                alt="Electron logo"
              />{" "}
              Electron
            </h2>
            <h4
              style={{
                color: theme === "day" ? "rgb(0, 85, 160)" : "limegreen",
              }}
              className="project-description"
            >
              Replica of Electron e-commerce — a smart lifestyle & gadgets
              platform. Built the ProductDetails and Product pages.
            </h4>
            <div className="project-tech-stack">
              <SiHtml5 size={28} color="#E34F26" />
              <SiCss size={28} color="#1572B6" />
              <SiJavascript size={28} color="#F7DF1E" />
              <SiRazorpay size={28} color="#2C73C5" />
              <SiFirebase size={28} color="#FFCA28" />
            </div>
            <h3>
              <u style={{ color: theme === "day" ? "" : "whitesmoke" }}>
                My role
              </u>
              :{" "}
              <span
                style={{
                  color: theme === "day" ? "rgb(0, 85, 160)" : "limegreen",
                }}
              >
                Product Manager
              </span>
            </h3>
            <h3>
              <span
                style={{
                  color: theme === "day" ? "rgb(0, 85, 160)" : "limegreen",
                }}
              >
                Collaborative · team of 3{" "}
                <GroupIcon
                  style={{ verticalAlign: "middle", fontSize: "22px" }}
                />
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
