import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import titleWhite from "./Title White.svg";
import titleDark from "./Title Black.svg";

function Title() {
  const theme = useContext(ThemeContext);

  const [selectedTitle, setSelectedTitle] = useState(titleDark);

  useEffect(() => {
    setSelectedTitle(theme.name === "day" ? titleDark : titleWhite);
  }, [theme.name]);

  return (
    <div className="title">
      <img src={selectedTitle} alt="Logo" height="65px" width="auto" />
    </div>
  );
}

export default Title;
