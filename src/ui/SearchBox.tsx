import { Link } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import useSearchBox from '@/hooks/useSearchBox';

export default function SearchBox() {
  const { handleSubmit, setSearchValue } = useSearchBox();

  return (
    <nav className="navbar-container">
      <div className="container">
        <div className="brand-container">
          <Link to="/">
            <img src="/ml-logo.webp" loading="lazy" />
          </Link>
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
