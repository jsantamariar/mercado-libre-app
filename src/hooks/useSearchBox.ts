import { useContext, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getAllItems } from '@/api';
import { ItemsContext } from '@/context/itemsContext';

const useSearchBox = () => {
  const navigate = useNavigate();
  const [, setSearchParams] = useSearchParams();
  const { setItems, setLoading } = useContext(ItemsContext);

  const [isError, setIsError] = useState<Error | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = await getAllItems(searchValue);
      setItems(data);
      navigate('/items');
      setSearchParams({ search: searchValue });
    } catch (error) {
      setIsError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    setSearchValue,
    isError,
  };
};

export default useSearchBox;
