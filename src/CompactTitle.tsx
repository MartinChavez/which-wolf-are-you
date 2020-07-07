import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import titleWhite from "./Compact Title White.svg";
import titleDark from "./Compact Title Black.svg";

function CompactTitle() {
  const theme = useContext(ThemeContext);

  const [selectedTitle, setSelectedTitle] = useState(titleDark);

  useEffect(() => {
    setSelectedTitle(theme.name === "day" ? titleDark : titleWhite);
  }, [theme.name]);

  return (
    <div className="compact-title">
      <img src={selectedTitle} alt="Logo" height="200px" width="auto" />
    </div>
  );
}

export default CompactTitle;
