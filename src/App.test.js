import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders magbank header', () => {
  render(<App />);
  const el = screen.getByText(/Magbank/i);
  expect(el).toBeInTheDocument();
});
