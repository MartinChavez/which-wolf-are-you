import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WolfApp from "./WolfApp";

const themes = {
  day: {
    background: "#eeeeee",
  },
  night: {
    background: "#222222",
  },
};

export const ThemeContext = React.createContext(themes.day);

ReactDOM.render(
  <ThemeContext.Provider value={themes.day}>
    <React.StrictMode>
      <WolfApp></WolfApp>
    </React.StrictMode>
  </ThemeContext.Provider>,
  document.getElementById("root")
);
