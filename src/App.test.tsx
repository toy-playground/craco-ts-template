import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders made by link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dreamerryao/i);
  expect(linkElement).toBeInTheDocument();
});
