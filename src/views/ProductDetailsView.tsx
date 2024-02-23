import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ItemsContext } from '@/context/itemsContext';
import SearchBox from '@/ui/SearchBox';
import ProductDetails from '@/ui/ProductDetails';
import LoadingSpinner from '@/ui/LoadingSpinner';
import ErrorBoundaryML from '@/ui/ErrorBoundaryML';
import useProductDetails from '@/hooks/useProductDetails';

export default function ProductDetailsView() {
  const { id } = useParams();
  const { items } = useContext(ItemsContext);
  const { isError, isLoading, product } = useProductDetails(id as string);

  if (isError) {
    return <ErrorBoundaryML />;
  }

  return (
    <>
      <SearchBox />
      {isLoading && <LoadingSpinner />}
      {!isLoading && <ProductDetails product={product.item} categories={items.categories} />}
    </>
  );
}
