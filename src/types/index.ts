interface Author {
  name: string;
  lastname: string;
}

interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description?: string;
}

interface ApiResponse {
  author: Author;
  categories: string[];
  items: Item[];
}

interface ProductResponse {
  author: Author;
  item: Item;
}

export type { Author, Price, Item, ApiResponse, ProductResponse };
