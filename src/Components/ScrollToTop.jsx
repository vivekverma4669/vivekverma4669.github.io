import { useContext, useEffect, useState } from "react";
import { AuthTheme } from "../AuthThemeProvider";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTop = () => {
  const { theme } = useContext(AuthTheme);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={`arrup ${visible ? "arrup-visible" : ""}`}
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        backgroundColor: theme === "day" ? "#001C55" : "#32de84",
        color: theme === "day" ? "#fff" : "#001C55",
      }}
    >
      <KeyboardArrowUpIcon style={{ fontSize: "28px" }} />
    </button>
  );
};

export default ScrollToTop;
