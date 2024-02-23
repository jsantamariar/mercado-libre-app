import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import NoResults from '../components/NotResults';

describe('NoResults Component', () => {
  test('should render no results message', () => {
    render(<NoResults />);

    const messageElement = screen.getByText('No se encontraron resultados. Vuelve a buscar nuevos productos');
    expect(messageElement).toBeInTheDocument();
  });
});
