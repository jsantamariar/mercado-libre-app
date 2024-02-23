import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import SearchBox from '../components/SearchBox';

jest.mock('../hooks/useSearchBox', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    handleSubmit: jest.fn(),
    setSearchValue: jest.fn(),
    searchValue: '',
    isError: false,
  })),
}));

describe('SearchBox Component', () => {
  it('should render input and search button', () => {
    render(
      <BrowserRouter>
        <SearchBox />
      </BrowserRouter>
    );

    const input = screen.getByPlaceholderText('Nunca dejes de buscar');
    const searchButton = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toBeDisabled();
  });
});
