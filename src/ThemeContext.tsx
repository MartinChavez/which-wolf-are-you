import React from "react";

export interface ThemeInfo {
  background: string;
  textColor: string;
  secondaryTextColor: string;
  hyperlinkColor: string;
  name: string;
}

type Theme = "day" | "night";

export const themes: Record<Theme, ThemeInfo> = {
  day: {
    background: "#eeeeee",
    textColor: "rgb(34,34,34)",
    secondaryTextColor: "rgb(77,77,77)",
    hyperlinkColor: "grey",
    name: "day",
  },
  night: {
    background: "#222222",
    textColor: "rgb(217,217,217)",
    secondaryTextColor: "rgb(173,173,173)",
    hyperlinkColor: "#09d3ac",
    name: "night",
  },
};

export let ThemeContext: React.Context<ThemeInfo> = React.createContext(
  themes.day
);
