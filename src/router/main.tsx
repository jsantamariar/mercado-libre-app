/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';

const SearchBoxView = lazy(() => import('@/views/SearchBoxView.tsx'));
const SearchResultView = lazy(() => import('@/views/SearchResultView.tsx'));
const ProductDetails = lazy(() => import('@/views/ProductDetails.tsx'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SearchBoxView />}>
        <Route path="/items" element={<SearchResultView />} />
        <Route path="/items/:id" element={<ProductDetails />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </>
  )
);

export default router;
