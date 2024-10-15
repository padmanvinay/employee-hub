/* eslint-disable react/react-in-jsx-scope */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppRouter from './Router/index.tsx';
import { Provider } from 'react-redux';
import { store } from './Redux/store.ts';
import { ThemeProvider } from './components/themeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <AppRouter />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
