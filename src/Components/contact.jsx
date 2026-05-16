import React, { useContext } from "react";
import "./contact.css";
import { AuthTheme } from "../AuthThemeProvider";
import Resume from "./Videos/Vivek-Verma-Resume.pdf";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import DownloadIcon from "@mui/icons-material/Download";
import { FaGithub, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const { theme } = useContext(AuthTheme);
  const iconColor = theme === "day" ? "#333" : "#fff";
  const iconSize = 35;

  return (
    <>
      <div
        className="box5 reveal"
        id="box5"
        style={{ backgroundColor: theme == "day" ? "#aaaeb0" : "#051c26" }}
      >
        <div className="box51" id="contact">
          <h1
            style={{
              textAlign: "center",
              color: theme == "day" ? "rgb(0, 85, 169)" : "#32de84",
              textShadow: "2px 2px 2px black",
              fontSize: "50px",
            }}
          >
            CONTACT
          </h1>
        </div>

        <div className="box52">
          <div className="box511">
            <h1
              className="box5h1"
              style={{ color: theme == "day" ? null : "white" }}
            >
              Reach Out to me!
            </h1>

            <div className="box5111">
              <p style={{ color: theme == "day" ? null : "white" }}>
                <LocationOnIcon style={{ verticalAlign: "middle", marginRight: "6px" }} />
                Prayagraj, Uttar Pradesh
              </p>
            </div>

            <div className="box5111">
              <p
                id="contact-email"
                style={{ color: theme == "day" ? null : "white" }}
              >
                <EmailIcon style={{ verticalAlign: "middle", marginRight: "6px" }} />
                vivekverma4679@gmail.com
              </p>
            </div>

            <div className="box5111">
              <p style={{ color: theme == "day" ? null : "white" }}>
                <PhoneIcon style={{ verticalAlign: "middle", marginRight: "6px" }} />
                +91-9369546165
              </p>
            </div>

            <div className="box5112">
              <div className="ico">
                <a href="https://github.com/vivekverma4669" id="contact-github">
                  <FaGithub size={iconSize} color={iconColor} />
                </a>
              </div>
              <div className="ico">
                <a href="https://wa.me/919369546165" id="contact-phone">
                  <FaWhatsapp size={iconSize} color="#25D366" />
                </a>
              </div>
              <div className="ico">
                <a
                  href="https://www.linkedin.com/in/vivek-verma-594700228/"
                  id="contact-linkedin"
                >
                  <FaLinkedin size={iconSize} color="#0A66C2" />
                </a>
              </div>
              <div className="ico">
                <a href="mailto:vivekverma4679@gmail.com" id="contact-email">
                  <EmailIcon style={{ fontSize: iconSize, color: theme === "day" ? "#EA4335" : "#EA4335" }} />
                </a>
              </div>
              <div className="ico">
                <a href="https://www.instagram.com/vivek__.soni/">
                  <FaInstagram size={iconSize} color="#E4405F" />
                </a>
              </div>
              <div className="ico">
                <a href="tel:+919369546165" id="contact-phone">
                  <PhoneIcon style={{ fontSize: iconSize, color: iconColor }} />
                </a>
              </div>
            </div>
          </div>

          <div className="box512">
            <img
              className="img51"
              src="https://i.ibb.co/1r9Hhxs/Whats-App-Image-2024-01-17-at-20-04-51-344e3480.jpg"
              alt=""
            />
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
                  <DownloadIcon style={{ verticalAlign: "middle", fontSize: "20px" }} id="resume-button-1" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <h3
        style={{
          backgroundColor: "rgb(0, 85, 169",
          margin: "0px",
          textAlign: " center",
          color: "white",
        }}
      >
        Built From Scrach by Vivek 😎
      </h3>
    </>
  );
};

export default Contact;
