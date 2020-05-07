import React from "react";

export interface ThemeInfo {
  background: string;
  textColor: string;
  hyperlinkColor: string;
}

type Theme = "day" | "night";

export const themes: Record<Theme, ThemeInfo> = {
  day: {
    background: "#eeeeee",
    textColor: "black",
    hyperlinkColor: "grey",
  },
  night: {
    background: "#222222",
    textColor: "white",
    hyperlinkColor: "#09d3ac",
  },
};

export let ThemeContext: React.Context<ThemeInfo> = React.createContext(
  themes.day
);
