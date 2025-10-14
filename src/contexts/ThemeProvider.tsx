import React, { useState, useEffect } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import type { TTheme } from "@/types/themeContextType";

type TThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: TThemeProviderProps) => {
  const [theme, setTheme] = useState<TTheme>(() => {
    const saved = localStorage.getItem("theme") as TTheme | null;
    return saved === "dark" || saved === "light" ? saved : "light";
  });

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    document.body.style.backgroundColor =
      theme === "light" ? "#e9ecef" : "#343a40";
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
