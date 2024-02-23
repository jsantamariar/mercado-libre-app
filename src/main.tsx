import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ReactDOM from 'react-dom/client';
import ItemsProvider from './context/itemsContext.jsx';
import router from './router/main.tsx';
import ErrorBoundaryML from './components/ErrorBoundaryML.tsx';

import './assets/globalStyles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorBoundaryML />}>
      <ItemsProvider>
        <RouterProvider router={router} />
      </ItemsProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
