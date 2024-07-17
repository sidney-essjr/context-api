import { ReactNode } from "react";
import ThemeContextProvider from "./context/ThemeContext";

export default function AppProviders({ children }: { children: ReactNode }) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
}
