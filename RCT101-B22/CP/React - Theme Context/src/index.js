import { createRoot } from 'react-dom/client';
import App from './App';
import ThemeContextProvider from "./context/ThemeContextProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeContextProvider>
        <App />
  </ThemeContextProvider>
);



