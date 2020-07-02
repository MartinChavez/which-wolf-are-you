import React, { useState, Dispatch, SetStateAction } from "react";
import { themes, ThemeInfo } from "./ThemeContext";
import sun from "./Sun.svg";

type SunMoonProps = {
  setTheme: Dispatch<SetStateAction<ThemeInfo>>;
};

function SunMoon(props: SunMoonProps) {
  const [showSun, setShowSun] = useState(true);

  let themButtonClick = (
    event: React.MouseEvent<HTMLImageElement, globalThis.MouseEvent>
  ) => {
    if (event.currentTarget.alt === "Sun") {
      props.setTheme(themes.night);
      setShowSun(false);
    } else if (event.currentTarget.alt === "Moon") {
      props.setTheme(themes.day);
      setShowSun(true);
    }
  };

  return (
    <div className="sun-moon">
      {showSun && (
        <img
          src={sun}
          alt="Sun"
          onClick={themButtonClick}
          width="100%"
          height="200px"
        ></img>
      )}
      {!showSun && (
        <button name="Night">
          <span role="img" aria-label="Day">
            🌘
          </span>
        </button>
      )}
    </div>
  );
}

export default SunMoon;
