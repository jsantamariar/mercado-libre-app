import { Item } from '@/types';
import { formatItemPrice } from '@/utils';
import Breadcrumb from './Breadcrumb';

interface Props {
  product: Item;
  categories: string[];
}

export default function ProductDetails({ product, categories }: Props) {
  const { title, price, condition, sold_quantity } = product;
  const { priceFormatted, decimal } = formatItemPrice(price.amount);

  return (
    <div className="product-container">
      <Breadcrumb categories={categories} />
      <div className="product-details-container">
        <div className="product-image-container">
          <img src={product.picture} alt={title} className="product-image" />
          <div className="product-description-container">
            <h2 className="product-description-title">Descripción del producto</h2>
            <p className="product-description">{product.description}</p>
          </div>
        </div>
        <div className="product-details">
          <div className="product-condition-container">
            <p className="product-condition">
              {condition === 'new' ? 'Nuevo' : 'Usado'} - {sold_quantity || 0} vendidos
            </p>
          </div>
          <h1 className="product-title">{title}</h1>
          <div className="price-container">
            <span className="main-price">$ {priceFormatted}</span>
            <sup className="decimals">{decimal}</sup>
          </div>
          <div className="product-button-container">
            <button className="product-button">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
