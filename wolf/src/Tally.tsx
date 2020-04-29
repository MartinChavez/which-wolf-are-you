import React from "react";
import "./Tally.css";

interface WolfRecordProps {
  times: number;
}

function WolfRecord(props: WolfRecordProps) {
  let wolfs = [];
  for (let i = 0; i < props.times; ++i) {
    wolfs.push(
      <span key={i} role="img" aria-label="wolf-times">
        🐺
      </span>
    );
  }

  return <div>{wolfs}</div>;
}

function Tally() {
  return (
    <div>
      <h4 className="tally">Tally</h4>
      <WolfRecord times={3}></WolfRecord>
      <WolfRecord times={5}></WolfRecord>
      <WolfRecord times={1}></WolfRecord>
      <WolfRecord times={8}></WolfRecord>
    </div>
  );
}

export default Tally;
