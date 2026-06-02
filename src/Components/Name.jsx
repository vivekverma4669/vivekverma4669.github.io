import React from "react";
import "./Name.css";
import Resume from "./Videos/Vivek-Verma-Resume.pdf";
import { AuthTheme } from "../AuthThemeProvider";
import { useContext } from "react";
import hero from "../images/hero.png";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Box1 = () => {
  const { theme, toggleTheme } = useContext(AuthTheme);

  return (
    <div
      className="box1"
      id="box1"
      style={{
        backgroundColor: theme == "day" ? null : "rgb(16, 22,34)",
        marginTop: "60px",
        marginBottom: "-50px",
      }}
    >
      <div className="box10" id="home">
        <span style={{ "--i": 1, color: theme == "day" ? null : "white" }}>
          <h1>i'</h1>
        </span>
        <span style={{ "--i": 2, color: theme == "day" ? null : "white" }}>
          <h1>m</h1>
        </span>
        <span style={{ "--i": 10 }}>&nbsp;</span>
        <span style={{ "--i": 10 }}>&nbsp;</span>
        <span style={{ "--i": 10 }}>&nbsp;</span>
        <span
          style={{
            "--i": 11,
            color: theme == "day" ? "rgb(0, 85, 169)" : "rgb(42, 205, 216)",
          }}
        >
          <h1 id='user-detail-name"'>V</h1>
        </span>
        <span
          style={{
            "--i": 12,
            color: theme == "day" ? "rgb(0, 85, 169)" : "rgb(42, 205, 216)",
          }}
        >
          <h1>i</h1>
        </span>
        <span
          style={{
            "--i": 13,
            color: theme == "day" ? "rgb(0, 85, 169)" : "rgb(42, 205, 216)",
          }}
        >
          <h1>v</h1>
        </span>
        <span
          style={{
            "--i": 15,
            color: theme == "day" ? "rgb(0, 85, 169)" : "rgb(42, 205, 216)",
          }}
        >
          <h1>e</h1>
        </span>
        <span
          style={{
            "--i": 16,
            color: theme == "day" ? "rgb(0, 85, 169)" : "rgb(42, 205, 216)",
          }}
        >
          <h1>k</h1>
        </span>

        <span style={{ "--i": 11 }}>&nbsp;</span>
        <span style={{ "--i": 11 }}>&nbsp;</span>
        <span
          style={{
            "--i": 12,
            color: theme == "day" ? "rgb(0, 85, 169)" : "rgb(42, 205, 216)",
          }}
        >
          <h1>V</h1>
        </span>
        <span
          style={{
            "--i": 13,
            color: theme == "day" ? "rgb(0, 85, 169)" : "rgb(42, 205, 216)",
          }}
        >
          <h1>e</h1>
        </span>
        <span
          style={{
            "--i": 14,
            color: theme == "day" ? "rgb(0, 85, 169)" : "rgb(42, 205, 216)",
          }}
        >
          <h1>r</h1>
        </span>
        <span
          style={{
            "--i": 15,
            color: theme == "day" ? "rgb(0, 85, 169)" : "rgb(42, 205, 216)",
          }}
        >
          <h1>m</h1>
        </span>
        <span
          style={{
            "--i": 16,
            color: theme == "day" ? "rgb(0, 85, 169)" : "rgb(42, 205, 216)",
          }}
        >
          <h1>a</h1>
        </span>
      </div>

      <div className="box11">
        <div className="box111">
          <h2
            className="wlcm_note"
            style={{
              color: theme == "day" ? "black" : "white",
              marginLeft: "20px",
            }}
          >
            Welcome to my portfolio!
          </h2>
          <h3
            className="some_about"
            id="user-detail-intro"
            style={{
              backgroundColor: theme == "day" ? null : "rgb(16, 22,34)",
              color: theme == "day" ? null : "rgb(42, 205, 216)",
              marginLeft: "20px",
            }}
          >
            <span
              style={{
                color: theme == "day" ? "black" : "white",
                textShadow: "2px 2px grey",
              }}
            >
              I am a Frontend-Focused Full Stack Developer
            </span>
            <br />
            <span
              style={{
                fontSize: "0.75em",
                color: theme == "day" ? "#444" : "#aaa",
              }}
            >
              dedicated to crafting cohesive web applications that seamlessly
              integrate polished front-end design with strong back-end
              proficiency. React is my core ·~2 years building production SaaS
              at{" "}
            </span>
            <span
              style={{
                fontSize: "0.75em",
                color: theme == "day" ? "rgb(0,85,169)" : "#32de84",
                fontWeight: "bold",
              }}
            >
              Galific Solutions
            </span>
          </h3>

          <div className="btn_div">
            <button
              className="rbtn"
              style={{
                marginLeft: "-50px",
                margin: "10px",
                backgroundColor: theme == "day" ? null : "green",
              }}
            >
              <a download="Vivek-Verma-Resume" href={Resume}>
                {" "}
                Resume{" "}
                <DownloadIcon
                  style={{ verticalAlign: "middle", fontSize: "20px" }}
                  id="resume-button-1"
                />
              </a>
            </button>

            <button
              className="rbtn"
              style={{ backgroundColor: theme == "day" ? null : "green" }}
            >
              <a
                href="https://drive.google.com/file/d/1I7xkrbbKzVDDCjZPh2GRZs4frHAkciSe/view?usp=sharing"
                target="blank"
              >
                Resume{" "}
                <OpenInNewIcon
                  style={{ verticalAlign: "middle", fontSize: "20px" }}
                />
              </a>
            </button>
          </div>
        </div>

        <div className="box112">
          <img src={hero} alt="side image " border="0" />
        </div>
      </div>
    </div>
  );
};

export default Box1;
