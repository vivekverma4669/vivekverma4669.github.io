import { useContext } from "react";
import "./tech.css";
import { AuthTheme } from "../AuthThemeProvider";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiRedux,
  SiBootstrap,
  SiReactrouter,
  SiGithub,
  SiGit,
  SiOpenai,
  SiNetlify,
  SiPostman,
  SiRazorpay,
  SiFirebase,
  SiMui,
} from "react-icons/si";
import { FaJava, FaKey } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const Tech = () => {
  const { theme } = useContext(AuthTheme);
  const mono = theme === "day" ? "#111" : "#fff";

  return (
    <div
      style={{
        backgroundColor: theme == "day" ? null : "rgb(16, 22,34)",
        marginTop: "-50px",
      }}
    >
      <h1
        className="techS"
        id="techS"
        style={{
          textAlign: "center",
          color: theme == "day" ? "rgb(0, 85, 169)" : "#32de84",
          textShadow: "2px 2px 2px black",
          fontSize: "50px",
        }}
      >
        <ul>Tech Stack</ul>
      </h1>

      <fieldset
        style={{ backgroundColor: theme == "day" ? null : "rgb(16, 22,34)" }}
      >
        <legend>
          {" "}
          <h2
            style={{
              textAlign: "center",
              color: theme == "day" ? "rgb(0, 85, 169)" : "rgb(42, 205, 216)",
              textShadow: "2px 2px 2px black",
              fontSize: "50px",
              backgroundColor: theme == "day" ? null : "rgb(16, 22,34)",
            }}
            className="stack"
          >
            Languages & Skills{" "}
          </h2>
        </legend>
        <div
          className="container2"
          style={{ backgroundColor: theme == "day" ? null : "rgb(16, 22,34)" }}
        >
          <div className="card">
            <SiHtml5 className="card-icon" color="#E34F26" />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>HTML</h3>
          </div>
          <div className="card">
            <SiCss className="card-icon" color="#1572B6" />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>CSS</h3>
          </div>
          <div className="card">
            <SiJavascript className="card-icon" color="#F7DF1E" />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>
              Java Script
            </h3>
          </div>
          <div className="card">
            <SiReact className="card-icon" color="#61DAFB" />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>React</h3>
          </div>
          <div className="card">
            <SiTypescript className="card-icon" color="#3178C6" />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>
              Type Script
            </h3>
          </div>
          <div className="card">
            <SiNextdotjs className="card-icon" color={mono} />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>
              Next js
            </h3>
          </div>
          <div className="card">
            <FaJava className="card-icon" color="#007396" />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>Java</h3>
          </div>
          <div className="card">
            <SiMongodb className="card-icon" color="#47A248" />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>
              Mongol DB
            </h3>
          </div>
          <div className="card">
            <SiNodedotjs className="card-icon" color="#339933" />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>
              Node js
            </h3>
          </div>
          <div className="card">
            <SiExpress className="card-icon" color={mono} />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>
              Express js
            </h3>
          </div>
          <div className="card">
            <SiRedux className="card-icon" color="#764ABC" />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>Redux</h3>
          </div>
          <div className="card">
            <SiBootstrap className="card-icon" color="#7952B3" />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>
              Boot strap
            </h3>
          </div>
          <div className="card">
            <SiReactrouter className="card-icon" color="#CA4245" />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>
              Router
            </h3>
          </div>
          <div className="card">
            <FaKey className="card-icon" color={mono} />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>
              Passport
            </h3>
          </div>
          <div className="card">
            <FaReact className="card-icon" color="#61DAFB" />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>
              React Native
            </h3>
          </div>

          <div className="card">
            <SiMui className="card-icon" color="#007FFF" />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>MUI</h3>
          </div>
        </div>
      </fieldset>

      <fieldset
        style={{ backgroundColor: theme == "day" ? null : "rgb(16, 22,34)" }}
      >
        <legend>
          {" "}
          <h2
            style={{
              textAlign: "center",
              color: theme == "day" ? "rgb(0, 85, 169)" : "rgb(42, 205, 216)",
              textShadow: "2px 2px 2px black",
              fontSize: "50px",
            }}
            className="stack"
          >
            Tools{" "}
          </h2>
        </legend>
        <div
          className="container2"
          style={{ backgroundColor: theme == "day" ? null : "rgb(16, 22,34)" }}
        >
          <div className="card">
            <SiGithub className="card-icon" color={mono} />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>
              Git hub
            </h3>
          </div>
          <div className="card">
            <SiGit className="card-icon" color="#F05032" />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>Git</h3>
          </div>
          <div className="card">
            <SiOpenai className="card-icon" color={mono} />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>
              Chat GPT
            </h3>
          </div>
          <div className="card">
            <SiNetlify className="card-icon" color="#00C7B7" />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>
              Netlify
            </h3>
          </div>
          <div className="card">
            <SiPostman className="card-icon" color="#FF6C37" />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>
              Postman
            </h3>
          </div>
          <div className="card">
            <SiRazorpay className="card-icon" color="#2C73C5" />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>
              Razorpay
            </h3>
          </div>
          <div className="card">
            <SiFirebase className="card-icon" color="#FFCA28" />
            <h3 style={{ color: theme == "day" ? "black" : "white" }}>
              Firebase
            </h3>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Tech;
