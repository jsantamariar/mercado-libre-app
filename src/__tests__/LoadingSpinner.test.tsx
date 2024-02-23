import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../components/LoadingSpinner';

describe('LoadingSpinner Component', () => {
  test('should render loading spinner', () => {
    render(<LoadingSpinner />);

    const loadingElement = screen.getByText('Loading...');
    expect(loadingElement).toBeInTheDocument();
  });
});
