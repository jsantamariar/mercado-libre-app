import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemCard from '../components/ItemCard';

describe('ItemCard Component', () => {
  const mockItem = {
    id: 'MLA123',
    title: 'Televisor LG',
    price: {
      amount: 1000,
      currency: 'ARS',
      decimals: 0,
    },
    picture: 'http://example.com/tv.jpg',
    condition: 'new',
    free_shipping: true,
    sold_quantity: 10,
  };

  it('should show right product information', () => {
    render(<ItemCard item={mockItem} />);

    expect(screen.getByText(mockItem.title)).toBeInTheDocument();
    expect(screen.getByText('$ 10')).toBeInTheDocument();
    expect(screen.getByAltText(mockItem.title)).toHaveAttribute('src', mockItem.picture);
    expect(screen.getByText('Nuevo')).toBeInTheDocument();
    expect(screen.getByTestId('free-shipping-icon')).toBeInTheDocument();
  });

  test('should show "Used" if the product condition is used', () => {
    const usedItem = { ...mockItem, condition: 'used' };
    render(<ItemCard item={usedItem} />);

    expect(screen.getByText('Usado')).toBeInTheDocument();
  });

  test('should not show free shipping icon if free_shipping is false', () => {
    const noShippingItem = { ...mockItem, free_shipping: false };
    render(<ItemCard item={noShippingItem} />);

    expect(screen.queryByTestId('free-shipping-icon')).not.toBeInTheDocument();
  });
});
