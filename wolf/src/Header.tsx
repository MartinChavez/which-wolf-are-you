import React, { useState } from "react";
import "./Header.css";

type RadioButtonProps = {
  id: string;
  isSelected: boolean;
  value: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton = (props: RadioButtonProps) => {
  return (
    <div className="RadioButton">
      <input
        id={props.id}
        onChange={props.onChange}
        value={props.value}
        type="radio"
        checked={props.isSelected}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

function Header() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  let radioChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "Day") {
      setIsLightTheme(true);
    } else {
      setIsLightTheme(false);
    }
  };

  return (
    <div>
      <h4 className="header">Header</h4>
      <RadioButton
        onChange={radioChangeHandler}
        id="1"
        isSelected={isLightTheme}
        label="Day"
        value="Day"
      />

      <RadioButton
        onChange={radioChangeHandler}
        id="2"
        isSelected={!isLightTheme}
        label="Night"
        value="Night"
      />
    </div>
  );
}

export default Header;
