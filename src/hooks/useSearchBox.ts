import { useContext, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getSearchItems } from '@/api';
import { ItemsContext } from '@/context/itemsContext';

const useSearchBox = () => {
  const { setItems } = useContext(ItemsContext);
  const [searchValue, setSearchValue] = useState<string>('');
  const navigate = useNavigate();
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await getSearchItems(searchValue);
    setItems(data);
    navigate('/items');
    setSearchParams({ search: data.query });
    localStorage.setItem('search', data.query);
  };

  return {
    handleSubmit,
    setSearchValue,
  };
};

export default useSearchBox;
