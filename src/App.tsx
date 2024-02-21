import SearchBox from '@/components/SearchBox';
import ItemCard from './components/ItemCard';
import { useContext } from 'react';
import { ItemsContext } from './context/items';

function App() {
  const { items } = useContext(ItemsContext);

  return (
    <div className="item-card-container">
      <SearchBox />
      {items.results.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
  );
}

export default App;
