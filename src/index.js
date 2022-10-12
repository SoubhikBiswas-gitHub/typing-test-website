import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GameModeContextProvider } from './Context/GameModes';
import { ThemeContextProvider } from './Context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameModeContextProvider>
      <ThemeContextProvider>
          <App />
      </ThemeContextProvider>
    </GameModeContextProvider>

      
  </React.StrictMode>
);


