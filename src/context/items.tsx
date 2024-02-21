import { Items } from '@/types';
import { createContext, useState } from 'react';

interface ItemsContext {
  items: Items;
  setItems: (items: Items) => void;
}

export const ItemsContext = createContext<ItemsContext>({
  items: {
    available_filters: [],
    available_sorts: [],
    country_default_time_zone: '',
    filters: [],
    paging: { total: 0, primary_results: 0, offset: 0, limit: 0 },
    pdp_tracking: {
      group: false,
      product_info: [],
    },
    query: '',
    results: [],
    site_id: '',
    sort: { id: '', name: '' },
  },
  setItems: () => {},
});

const ItemsProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Items>({
    available_filters: [],
    available_sorts: [],
    country_default_time_zone: '',
    filters: [],
    paging: { total: 0, primary_results: 0, offset: 0, limit: 0 },
    pdp_tracking: {
      group: false,
      product_info: [],
    },
    query: '',
    results: [],
    site_id: '',
    sort: { id: '', name: '' },
  });

  return <ItemsContext.Provider value={{ setItems, items }}>{children}</ItemsContext.Provider>;
};

export default ItemsProvider;
