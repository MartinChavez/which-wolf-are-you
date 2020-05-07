export interface ThemeInfo {
  background: string;
}

type Theme = "day" | "night";

export const themes: Record<Theme, ThemeInfo> = {
  day: { background: "#eeeeee" },
  night: { background: "#222222" },
};
