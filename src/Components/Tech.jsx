import { useContext } from "react";
import "./tech.css";
import { AuthTheme } from "../AuthThemeProvider";
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiTypescript, SiNextdotjs,
  SiMongodb, SiNodedotjs, SiExpress, SiRedux,
  SiGithub, SiGit, SiNetlify, SiPostman, SiRazorpay, SiFirebase,
  SiMui, SiDocker, SiRedis, SiGooglegemini, SiAnthropic, SiBitbucket,
} from "react-icons/si";
import { FaKey, FaReact } from "react-icons/fa";

const Tech = () => {
  const { theme } = useContext(AuthTheme);
  const mono = theme === "day" ? "#111" : "#fff";
  const textColor = theme === "day" ? "#222" : "#f0f0f0";
  const labelColor = theme === "day" ? "rgb(0,85,169)" : "#32de84";
  const chipBorder = theme === "day" ? "rgba(0,85,169,0.25)" : "rgba(100,180,255,0.2)";
  const chipBg = theme === "day" ? "rgba(0,85,169,0.05)" : "rgba(100,180,255,0.07)";
  const wrapperBg = theme === "day" ? "#eef3f7" : "rgb(18,28,44)";

  const Chip = ({ icon: Icon, color, label }) => (
    <div className="tech-chip" style={{ borderColor: chipBorder, backgroundColor: chipBg }}>
      {Icon
        ? <Icon size={22} color={color} />
        : <span className="chip-dot" style={{ background: color }} />
      }
      <span style={{ color: textColor }}>{label}</span>
    </div>
  );

  const ImgChip = ({ slug, color, label }) => (
    <div className="tech-chip" style={{ borderColor: chipBorder, backgroundColor: chipBg }}>
      <img
        src={`https://cdn.simpleicons.org/${slug}/${color.replace('#', '')}`}
        width={22} height={22} alt={label}
        style={{ display: 'block', flexShrink: 0 }}
      />
      <span style={{ color: textColor }}>{label}</span>
    </div>
  );

  const Group = ({ label, children }) => (
    <div className="tech-group">
      <div className="tech-group-label" style={{ color: labelColor }}>{label}</div>
      <div className="tech-chips">{children}</div>
    </div>
  );

  return (
    <div style={{ backgroundColor: theme === "day" ? null : "rgb(16, 22,34)", marginTop: "-50px" }}>
      <h1
        className="techS"
        id="techS"
        style={{
          textAlign: "center",
          color: theme === "day" ? "rgb(0, 85, 169)" : "#32de84",
          textShadow: "2px 2px 2px black",
          fontSize: "50px",
        }}
      >
        Tech Stack
      </h1>

      <div className="tech-wrapper reveal" style={{ backgroundColor: wrapperBg }}>

        <Group label="Frontend">
          <Chip icon={SiHtml5} color="#E34F26" label="HTML5" />
          <Chip icon={SiCss} color="#1572B6" label="CSS3" />
          <Chip icon={SiJavascript} color="#F7DF1E" label="JavaScript" />
          <Chip icon={SiReact} color="#61DAFB" label="React" />
          <Chip icon={SiTypescript} color="#3178C6" label="TypeScript" />
          <Chip icon={SiNextdotjs} color={mono} label="Next.js" />
          <Chip icon={SiRedux} color="#764ABC" label="Redux" />
          <Chip icon={SiMui} color="#007FFF" label="MUI" />
          <Chip icon={null} color="#FF4154" label="React Query" />
        </Group>

        <Group label="Backend">
          <Chip icon={SiNodedotjs} color="#339933" label="Node.js" />
          <Chip icon={SiExpress} color={mono} label="Express" />
          <Chip icon={SiMongodb} color="#47A248" label="MongoDB" />
          <Chip icon={SiRedis} color="#DC382D" label="Redis" />
          <Chip icon={FaKey} color={mono} label="Passport.js" />
        </Group>

        <Group label="Mobile">
          <Chip icon={FaReact} color="#61DAFB" label="React Native" />
        </Group>

        <Group label="DevOps">
          <Chip icon={SiDocker} color="#2496ED" label="Docker" />
        </Group>

        <Group label="AI / LLMs">
          <ImgChip slug="groq" color="#FF6B35" label="Groq" />
          <ImgChip slug="xai" color={theme === "day" ? "111111" : "ffffff"} label="Grok (xAI)" />
          <Chip icon={SiGooglegemini} color="#4285F4" label="Gemini" />
          <Chip icon={SiAnthropic} color="#D97757" label="Claude / Opus" />
        </Group>

        <Group label="Tools">
          <Chip icon={SiGit} color="#F05032" label="Git" />
          <Chip icon={SiGithub} color={mono} label="GitHub" />
          <Chip icon={SiBitbucket} color="#0052CC" label="Bitbucket" />
          <Chip icon={SiPostman} color="#FF6C37" label="Postman" />
          <Chip icon={SiFirebase} color="#FFCA28" label="Firebase" />
          <Chip icon={SiNetlify} color="#00C7B7" label="Netlify" />
          <Chip icon={SiRazorpay} color="#2C73C5" label="Razorpay" />
        </Group>

      </div>
    </div>
  );
};

export default Tech;
