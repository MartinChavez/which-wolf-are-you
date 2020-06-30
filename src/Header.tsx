import React, { useState, Dispatch, SetStateAction } from "react";
import { themes, ThemeInfo } from "./ThemeContext";
import "./Header.css";

type HeaderProps = {
  setTheme: Dispatch<SetStateAction<ThemeInfo>>;
  resetButtonClick: () => void;
};

function Header(props: HeaderProps) {
  const [showSun, setShowSun] = useState(true);

  let themButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    if (event.currentTarget.name === "Day") {
      props.setTheme(themes.night);
      setShowSun(false);
    } else if (event.currentTarget.name === "Night") {
      props.setTheme(themes.day);
      setShowSun(true);
    }
  };

  return (
    <div className="header">
      <h4>Header</h4>
      {showSun && (
        <button name="Day" onClick={themButtonClick}>
          <span role="img" aria-label="Day">
            ☀️
          </span>
        </button>
      )}
      {!showSun && (
        <button name="Night" onClick={themButtonClick}>
          <span role="img" aria-label="Day">
            🌘
          </span>
        </button>
      )}

      <button onClick={props.resetButtonClick}>Reset</button>
    </div>
  );
}

export default Header;
