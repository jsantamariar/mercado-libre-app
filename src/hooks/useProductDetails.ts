import { useEffect, useState } from 'react';
import { getItemDetails } from '@/api';
import { ProductResponse } from '@/types';

const useProductDetails = (id: string) => {
  const [product, setProduct] = useState<ProductResponse>({
    author: {
      name: '',
      lastname: '',
    },
    item: {
      id: '',
      title: '',
      price: {
        currency: '',
        amount: 0,
        decimals: 0,
      },
      picture: '',
      condition: '',
      free_shipping: false,
      sold_quantity: 0,
      description: '',
    },
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const handleGetItemDetails = async (itemId: string) => {
      try {
        const response = await getItemDetails(itemId);
        setProduct(response);
        setIsLoading(false);
      } catch (error) {
        setIsError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    handleGetItemDetails(id as string);
  }, [id]);

  return {
    product,
    isLoading,
    isError,
  };
};

export default useProductDetails;
