import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// Verificar se o elemento existe
const appElement = document.getElementById('app');

if (!appElement) {
  throw new Error('Elemento #app não encontrado no DOM');
}

const root = ReactDOM.createRoot(appElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);