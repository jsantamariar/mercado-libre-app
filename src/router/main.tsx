/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import LoadingSpinner from '@/components/LoadingSpinner';

const SearchBoxPage = lazy(() => import('@/pages/SearchBoxPage'));
const SearchResultPage = lazy(() => import('@/pages/SearchResultPage'));
const ProductDetailsPage = lazy(() => import('@/pages/ProductDetailsPage'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <SearchBoxPage />
          </Suspense>
        }
      />
      <Route
        path="/items"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <SearchResultPage />
          </Suspense>
        }
      />
      <Route
        path="/items/:id"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <ProductDetailsPage />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </>
  )
);

export default router;
