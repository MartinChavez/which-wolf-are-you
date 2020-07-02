import React from "react";

type GrassProps = {
  className: string;
};

function Grass(props: GrassProps) {
  return <div className={props.className}></div>;
}

export default Grass;
