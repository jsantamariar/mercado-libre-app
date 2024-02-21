import { Result } from '@/types';

export default function SearchResult({ item }: { item?: Result }) {
  return (
    <div className="item-card-container">
      <h2>
        Search Result
        {item?.title} - ${item?.price}
      </h2>
    </div>
  );
}
