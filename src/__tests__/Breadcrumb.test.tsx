import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrumb from '../components/Breadcrumb';

describe('Breadcrumb Component', () => {
  it('should show a breadcrumb with the provided categories', () => {
    const categories = ['Electrónica', 'Audio y Video', 'Televisores'];
    render(<Breadcrumb categories={categories} />);

    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });

    const icons = screen.getAllByTestId('breadcrumb-icon');
    expect(icons.length).toBe(categories.length - 1);
  });
});
