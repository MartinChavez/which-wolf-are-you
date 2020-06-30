import React, { useState, Dispatch, SetStateAction } from "react";
import { themes, ThemeInfo } from "./ThemeContext";

type SunMoonProps = {
  setTheme: Dispatch<SetStateAction<ThemeInfo>>;
  resetButtonClick: () => void;
};

function SunMoon(props: SunMoonProps) {
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
    <div className="sun-moon">
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

      {/* <button onClick={props.resetButtonClick}>Reset</button> */}
    </div>
  );
}

export default SunMoon;
