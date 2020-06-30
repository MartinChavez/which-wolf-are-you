import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { IWolf } from "./Questions";

type WolfResultProps = {
  wolf: IWolf;
};

function WolfResult(props: WolfResultProps) {
  const theme = useContext(ThemeContext);
  return (
    <div className="wolf-result">
      <h4>Your inner wolf</h4>
      <span role="img" aria-label="wolf-times">
        {props.wolf.face}
      </span>
      <p style={{ color: theme.textColor }}>{props.wolf.name}</p>
    </div>
  );
}

export default WolfResult;
