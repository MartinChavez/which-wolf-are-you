import React from "react";
import grass from "./grass.svg";

type GrassProps = {
  className: string;
};

function Grass(props: GrassProps) {
  return (
    <div className={props.className}>
      <img src={grass} alt="Grass" />
    </div>
  );
}

export default Grass;
