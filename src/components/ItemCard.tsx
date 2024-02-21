import { Result } from '@/types';

export default function ItemCard({ item }: { item: Result }) {
  console.log({ item });
  return (
    <div className="item-card-container">
      <p>{item.title}</p>
      <p>{item.price}</p>
    </div>
  );
}
