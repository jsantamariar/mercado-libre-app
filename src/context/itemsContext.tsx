import { createContext, useState } from 'react';
import { ApiResponse } from '@/types';

interface ItemsContext {
  items: ApiResponse;
  setItems: (data: ApiResponse) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const ItemsContext = createContext<ItemsContext>({
  items: {
    author: {
      name: '',
      lastname: '',
    },
    categories: [],
    items: [],
  },
  setItems: () => {},
  loading: false,
  setLoading: () => {},
});

const ItemsProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ApiResponse>({
    author: {
      name: '',
      lastname: '',
    },
    categories: [],
    items: [],
  });

  return <ItemsContext.Provider value={{ setItems: setData, items: data, loading, setLoading }}>{children}</ItemsContext.Provider>;
};

export default ItemsProvider;
