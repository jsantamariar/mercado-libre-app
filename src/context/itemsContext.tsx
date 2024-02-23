import { createContext, useState } from 'react';
import { ApiResponse } from '@/types';

interface ItemsContext {
  items: ApiResponse;
  setItems: (data: ApiResponse) => void;
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
});

const ItemsProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<ApiResponse>({
    author: {
      name: '',
      lastname: '',
    },
    categories: [],
    items: [],
  });

  return <ItemsContext.Provider value={{ setItems: setData, items: data }}>{children}</ItemsContext.Provider>;
};

export default ItemsProvider;
