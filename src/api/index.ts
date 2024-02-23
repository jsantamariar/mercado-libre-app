import axios from 'axios';
import { ApiResponse, ProductResponse } from '@/types';

const baseURL = 'https://mercado-libre-server.replit.app';

export const getAllItems = async (searchQuery: string): Promise<ApiResponse> => {
  try {
    const response = await axios.get(`${baseURL}/api/items`, {
      params: { q: searchQuery },
    });
    return response.data;
  } catch (error) {
    throw new Error('There was an error fetching the items');
  }
};

export const getItemDetails = async (itemId: string): Promise<ProductResponse> => {
  try {
    const response = await axios.get(`${baseURL}/api/items/${itemId}`);
    return response.data;
  } catch (error) {
    throw new Error('There was an error fetching the item details');
  }
};
