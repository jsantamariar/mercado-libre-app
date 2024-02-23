import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDetails from '../components/ProductDetails';

describe('ProductDetails Component', () => {
  const mockProduct = {
    id: 'MLA123',
    title: 'iPhone 13',
    price: {
      amount: 99999,
      currency: 'USD',
      decimals: 99,
    },
    picture: 'https://example.com/iphone13.jpg',
    condition: 'new',
    sold_quantity: 10,
    free_shipping: true,
    description: 'Descripción del iPhone 13',
  };

  const mockCategories = ['Electrónica', 'Celulares'];

  it('should render product details correctly', () => {
    render(<ProductDetails product={mockProduct} categories={mockCategories} />);

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(/Descripción del iPhone 13/)).toBeInTheDocument();
    expect(screen.getByText('Nuevo - 10 vendidos')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /iPhone 13/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Comprar/ })).toBeInTheDocument();
  });

  it('should render correct price format', () => {
    render(<ProductDetails product={mockProduct} categories={mockCategories} />);

    const mainPrice = screen.getByText(/\$ 999/); // Asegúrate de que el precio principal se muestra correctamente
    expect(mainPrice).toBeInTheDocument();

    const decimals = screen.getByText('99'); // Busca los decimales
    expect(decimals).toBeInTheDocument();
  });

  it('should render breadcrumbs with provided categories', () => {
    render(<ProductDetails product={mockProduct} categories={mockCategories} />);

    mockCategories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });
});
