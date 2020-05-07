import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WolfApp from "./WolfApp";

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <WolfApp></WolfApp>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

render();
