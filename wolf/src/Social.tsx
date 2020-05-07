import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./Social.css";

function Social() {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ color: theme.textColor }}>
      <h4 className="social">Social</h4>
      <p>Facebook</p>
      <p>Twitter</p>
      <p>Mail</p>
    </div>
  );
}

export default Social;
