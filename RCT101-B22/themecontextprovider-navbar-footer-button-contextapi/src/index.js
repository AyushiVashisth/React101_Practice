import ThemeContextProvider from "./context/ThemeContextProvider";
import App from "./App";
import AutoContextProvider from "./context/AuthContextProvider";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// 2.B
root.render(
  <ThemeContextProvider>
    <AutoContextProvider>
      <App />
    </AutoContextProvider>
  </ThemeContextProvider>
);
