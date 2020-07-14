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
      <h4
        className="section-title"
        style={{
          color: theme.textColor,
        }}
      >
        Your inner wolf
      </h4>
      <span role="img" aria-label="wolf-times">
        {props.wolf.face}
      </span>
      <h4
        className="section-sub-title"
        style={{
          color: theme.secondaryTextColor,
          textAlign: "center",
        }}
      >
        {props.wolf.name}
      </h4>
    </div>
  );
}

export default WolfResult;
