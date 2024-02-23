import { CiDeliveryTruck } from 'react-icons/ci';
import { Item } from '@/types';
import { formatItemPrice } from '../utils';

interface Props {
  item: Item;
}

export default function ItemCard({ item }: Props) {
  const { title, price, picture, condition, free_shipping } = item;
  const { priceFormatted } = formatItemPrice(price.amount);

  return (
    <>
      <div className="item-card-container">
        <div className="item-card">
          <img src={picture} alt={title} className="item-image" loading="lazy" />
          <div className="item-info">
            <div className="item-text">
              <span className="item-price">
                $ {priceFormatted}
                {free_shipping && (
                  <div className="free-shipping-icon" data-testid="free-shipping-icon">
                    <CiDeliveryTruck className="delivery-icon" />
                  </div>
                )}
              </span>
              <p className="item-title">{title}</p>
            </div>
            <span className="item-condition">{condition === 'new' ? 'Nuevo' : 'Usado'}</span>
          </div>
        </div>
      </div>
      <div className="item-divider" />
    </>
  );
}
