import React, { useState, Dispatch, SetStateAction } from "react";
import { themes, ThemeInfo } from "./ThemeContext";
import sun from "./Sun.svg";
import moon from "./Moon.svg";

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
      {showSun && <img src={sun} alt="Sun" onClick={themButtonClick}></img>}
      {!showSun && <img src={moon} alt="Moon" onClick={themButtonClick}></img>}
    </div>
  );
}

export default SunMoon;
