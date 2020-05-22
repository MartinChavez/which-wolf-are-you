import React, { useContext } from "react";
import "./WolfResult.css";
import { ThemeContext } from "./ThemeContext";
import { IWolf } from "./Questions";

type WolfResultProps = {
  wolf: IWolf;
};

function WolfResult(props: WolfResultProps) {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h4 className="wolf-result">Wolf Result</h4>
      <span role="img" aria-label="wolf-times">
        {props.wolf.face}
      </span>
      <p style={{ color: theme.textColor }}>{props.wolf.name}</p>
    </div>
  );
}

export default WolfResult;
