import React from "react";

export interface ThemeInfo {
  background: string;
  textColor: string;
}

type Theme = "day" | "night";

export const themes: Record<Theme, ThemeInfo> = {
  day: { background: "#eeeeee", textColor: "black" },
  night: { background: "#222222", textColor: "white" },
};

export let ThemeContext: React.Context<ThemeInfo> = React.createContext(
  themes.day
);
