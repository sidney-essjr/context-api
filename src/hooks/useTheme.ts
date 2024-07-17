import { useContext } from "react";
import { ThemeContext } from "../providers/context/ThemeContext";

export default function useTheme() {
  return useContext(ThemeContext);
}
