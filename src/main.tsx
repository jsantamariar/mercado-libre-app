import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import ItemsProvider from './context/itemsContext.jsx';
import router from './router/main.tsx';

import './assets/globalStyles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ItemsProvider>
      <RouterProvider router={router} />
    </ItemsProvider>
  </React.StrictMode>
);
