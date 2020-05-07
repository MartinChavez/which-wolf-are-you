import React, { useContext } from "react";
import "./WolfResult.css";
import { ThemeContext } from "./ThemeContext";

function WolfResult() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h4 className="wolf-result">Wolf Result</h4>
      <span role="img" aria-label="wolf-times">
        🐺
      </span>
      <p style={{ color: theme.textColor }}>Mexican wolf</p>
    </div>
  );
}

export default WolfResult;
