import { getSearchItems } from '@/api';
import { ItemsContext } from '@/context/items';
import { useContext, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';

export default function SearchBox() {
  const { setItems } = useContext(ItemsContext);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = await getSearchItems(searchValue);
    setItems(data);
    return data;
  };
  return (
    <nav className="navbar-container">
      <div className="container">
        <div className="brand-container">
          <img src="./ml-logo.webp" loading="lazy" />
        </div>
        <form className="search-container" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nunca dejes de buscar" onChange={(e) => setSearchValue(e.target.value)} />
          <button type="submit">
            <IoMdSearch color="black" fontSize={20} />
          </button>
        </form>
      </div>
    </nav>
  );
}
