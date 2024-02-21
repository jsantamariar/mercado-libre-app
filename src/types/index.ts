interface Filter {
  id: string;
  name: string;
  type: string;
}

interface SortOption {
  id: string;
  name: string;
}

interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

interface Attribute {}

interface Installment {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}

interface Seller {
  id: number;
  nickname: string;
}

interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  mode: string;
  tags: string[];
}

interface VariationData {}

interface Result {
  accepts_mercadopago: boolean;
  attributes: Attribute[];
  available_quantity: number;
  buying_mode: string;
  catalog_listing: boolean;
  catalog_product_id: string | null;
  category_id: string;
  condition: string;
  currency_id: string;
  discounts: null;
  domain_id: string;
  id: string;
  installments: Installment;
  inventory_id: string | null;
  listing_type_id: string;
  official_store_id: number | null;
  official_store_name: string | null;
  order_backend: number;
  original_price: number | null;
  permalink: string;
  price: number;
  promotions: string[];
  sale_price: number | null;
  seller: Seller;
  shipping: Shipping;
  site_id: string;
  stop_time: string;
  thumbnail: string;
  thumbnail_id: string;
  title: string;
  use_thumbnail_id: boolean;
  variation_filters: string[];
  variations_data: { [key: string]: VariationData };
  winner_item_id: string | null;
}

interface ProductInfo {
  id: string;
  score: number;
  status: string;
}

interface Items {
  available_filters: Filter[];
  available_sorts: SortOption[];
  country_default_time_zone: string;
  filters: Filter[];
  paging: Paging;
  pdp_tracking: {
    group: boolean;
    product_info: ProductInfo[];
  };
  query: string;
  results: Result[];
  site_id: string;
  sort: SortOption;
}

export { type Items, type Result };
