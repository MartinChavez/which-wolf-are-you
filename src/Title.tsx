import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import titleWhite from "./Title-White.svg";
import titleDark from "./Title.svg";

function Title() {
  const theme = useContext(ThemeContext);

  const [selectedTitle] = useState(
    theme.name === "day" ? titleDark : titleWhite
  );

  return (
    <div className="title">
      <img src={selectedTitle} alt="Logo" height="200px" width="auto" />
    </div>
  );
}

export default Title;
