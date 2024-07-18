import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import ContextContainer from "./components/molecules/ContextContainer";
import PeopleContainer from "./components/organisms/PeopleContainer";
import "./index.css";
import AppProviders from "./providers/AppProviders";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders>
      <ContextContainer />
      <PeopleContainer />
    </AppProviders>
  </StrictMode>
);
