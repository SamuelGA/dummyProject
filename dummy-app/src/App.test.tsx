import React from 'react';
import { render, getByRole } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getAllByText, getByRole } = render(<App />);
  expect(getAllByText('About Me'))
});
