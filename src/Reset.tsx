import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import cloudNight from "./CloudNight.svg";
import cloudDay from "./CloudDay.svg";

type ResetProps = {
  resetButtonClick: () => void;
};

function Reset(props: ResetProps) {
  const theme = useContext(ThemeContext);

  const [selectedCloud, setSelectedCloud] = useState(cloudDay);

  useEffect(() => {
    setSelectedCloud(theme.name === "day" ? cloudDay : cloudNight);
  }, [theme.name]);

  return (
    <div className="reset">
      <img
        onClick={props.resetButtonClick}
        src={selectedCloud}
        alt="Cloud"
        height="200px"
        width="auto"
      />
    </div>
  );
}

export default Reset;
