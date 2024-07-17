import { createContext, ReactNode, useEffect, useState } from "react";

export type ThemeCtxProps = {
  theme: "White" | "Dark";
  changeTheme: () => void;
};

const defaultTheme =
  (localStorage.getItem("theme") as ThemeCtxProps["theme"]) || "White";

export const ThemeContext = createContext<ThemeCtxProps>({
  theme: "White",
  changeTheme: () => {},
});

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<ThemeCtxProps["theme"]>(defaultTheme);

  const changeTheme = () => {
    theme === "White" ? setTheme("Dark") : setTheme("White");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
