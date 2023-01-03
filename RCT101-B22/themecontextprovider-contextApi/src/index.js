import { createRoot} from 'react-dom/client';
import App from './App';
import ThemeContextProvider from './Context/ThemeContextProvider';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 2.B
root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
