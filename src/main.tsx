import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/globalStyles.scss';
import ItemsProvider from './context/items.jsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ItemsProvider>
      <App />
    </ItemsProvider>
  </React.StrictMode>
);
