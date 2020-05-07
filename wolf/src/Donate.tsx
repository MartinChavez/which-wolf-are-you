import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./Donate.css";

function Donate() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h4 className="donate">Donate</h4>
      <a
        href="https://wolf.org/support/donate-options/"
        style={{ color: theme.hyperlinkColor }}
      >
        Donate to save the wolves
      </a>
    </div>
  );
}

export default Donate;
