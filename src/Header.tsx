import React, { Dispatch, SetStateAction } from "react";
import { themes, ThemeInfo } from "./ThemeContext";
import "./Header.css";

type HeaderProps = {
  setTheme: Dispatch<SetStateAction<ThemeInfo>>;
  resetButtonClick: () => void;
};

function Header(props: HeaderProps) {
  let themButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    if (event.currentTarget.name === "Day") {
      props.setTheme(themes.day);
    } else if (event.currentTarget.name === "Night") {
      props.setTheme(themes.night);
    }
  };

  return (
    <div>
      <h4 className="header">Header</h4>
      <button name="Day" onClick={themButtonClick}>
        <span role="img" aria-label="Day">
          ☀️
        </span>
      </button>
      <button name="Night" onClick={themButtonClick}>
        <span role="img" aria-label="Day">
          🌘
        </span>
      </button>
      <button onClick={props.resetButtonClick}>Reset</button>
    </div>
  );
}

export default Header;
