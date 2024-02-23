/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import LoadingSpinner from '@/ui/LoadingSpinner';

const SearchBoxView = lazy(() => import('@/views/SearchBoxView.tsx'));
const SearchResultView = lazy(() => import('@/views/SearchResultView.tsx'));
const ProductDetailsView = lazy(() => import('@/views/ProductDetailsView'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <SearchBoxView />
          </Suspense>
        }
      />
      <Route
        path="/items"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <SearchResultView />
          </Suspense>
        }
      />
      <Route
        path="/items/:id"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <ProductDetailsView />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </>
  )
);

export default router;
