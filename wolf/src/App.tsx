import React from "react";
import "./App.css";
import QuestionBlock from "./QuestionBlock";

function App() {
  return (
    <div className="grid">
      <div>
        <QuestionBlock></QuestionBlock>
      </div>
      <div>
        <QuestionBlock></QuestionBlock>
      </div>
      <div>
        <QuestionBlock></QuestionBlock>
      </div>
    </div>
  );
}

export default App;
