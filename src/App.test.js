import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Trelloyes! title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Trelloyes!/i);
  expect(linkElement).toBeInTheDocument();
});
