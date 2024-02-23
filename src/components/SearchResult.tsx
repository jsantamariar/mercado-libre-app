import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemsContext } from '@/context/itemsContext';
import ItemCard from './ItemCard';
import Breadcrumb from './Breadcrumb';
import LoadingSpinner from './LoadingSpinner';

export default function SearchResult() {
  const { items, loading } = useContext(ItemsContext);

  return (
    <div className="search-results-container">
      <div className="search-results">
        <Breadcrumb categories={items.categories} />
        {loading && <LoadingSpinner />}
        {!loading &&
          items.items.map((item) => (
            <Link key={item.id} to={`/items/${item.id}`} className="search-result-item">
              <ItemCard item={item} />
            </Link>
          ))}
      </div>
    </div>
  );
}
