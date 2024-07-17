import ReactDOM from "react-dom/client";
import ChangeTheme from "./components/ChangeTheme";
import DisplayTheme from "./components/DisplayTheme";
import "./index.css";
import AppProviders from "./providers/AppProviders";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppProviders>
    <DisplayTheme />
    <ChangeTheme />
  </AppProviders>
);
