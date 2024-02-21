import axios from 'axios';

const baseURL = 'https://api.mercadolibre.com/sites/MLA/search?q=';

export const getSearchItems = async (param: string) => {
  const response = await axios.get(baseURL + param);
  return response.data;
};
