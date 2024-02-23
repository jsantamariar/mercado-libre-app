import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchResult from '../components/SearchResult';
import { ItemsContext } from '../context/itemsContext';
import { ApiResponse } from '@/types';

const mockSetItems = jest.fn();
const mockSetLoading = jest.fn();

const mockItemsContext = (items: ApiResponse, loading: boolean) => ({
  items,
  setItems: mockSetItems,
  loading,
  setLoading: mockSetLoading,
});

describe('SearchResult Component', () => {
  it('should display loading spinner when loading', () => {
    const mockContextValue = mockItemsContext({ author: { name: '', lastname: '' }, categories: [], items: [] }, true);

    render(
      <BrowserRouter>
        <ItemsContext.Provider value={mockContextValue}>
          <SearchResult />
        </ItemsContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('should display items when loaded', () => {
    const mockItem = {
      id: 'MLA123',
      title: 'Televisor LG',
      price: {
        amount: 2000,
        currency: 'ARS',
        decimals: 0,
      },
      picture: 'http://example.com/tv.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 10,
    };
    const mockItem2 = {
      id: 'MLA124',
      title: 'Iphone',
      price: {
        amount: 1000,
        currency: 'ARS',
        decimals: 0,
      },
      picture: 'http://example.com/iphone.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 20,
    };
    const mockItems = [mockItem, mockItem2];
    const mockContextValue = mockItemsContext({ author: { name: '', lastname: '' }, categories: ['Cat1'], items: mockItems }, false);
    render(
      <BrowserRouter>
        <ItemsContext.Provider value={mockContextValue}>
          <SearchResult />
        </ItemsContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('Televisor LG')).toBeInTheDocument();
    expect(screen.getByText('Iphone')).toBeInTheDocument();
  });

  it('should display no results message when no items', () => {
    const mockContextValue = mockItemsContext({ author: { name: '', lastname: '' }, categories: [], items: [] }, false);

    render(
      <BrowserRouter>
        <ItemsContext.Provider value={mockContextValue}>
          <SearchResult />
        </ItemsContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText(/No se encontraron resultados/)).toBeInTheDocument();
  });
});
