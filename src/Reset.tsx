import React from "react";

type ResetProps = {
  resetButtonClick: () => void;
};

function Reset(props: ResetProps) {
  return (
    <div className="reset">
      <button onClick={props.resetButtonClick}>Reset</button>
    </div>
  );
}

export default Reset;
