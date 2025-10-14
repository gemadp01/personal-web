export type TTheme = "light" | "dark";

export type TThemeContextType = {
  theme: TTheme | null;
  toggleTheme: () => void;
};
