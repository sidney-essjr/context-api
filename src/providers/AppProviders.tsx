import { ReactNode } from "react";
import ThemeContextProvider from "./context/ThemeContext";
import QueryProvider from "./server/QueryProvider";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </QueryProvider>
  );
}
