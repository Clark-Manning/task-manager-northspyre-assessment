import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders header component with correct content', () => {
  const { getByText } = render(<Header />);

  // Check if the header contains the brand text
  const brandElement = getByText(/Task Manager/i);
  expect(brandElement).toBeInTheDocument();

  // Check if the header contains the assessment text
  const assessmentElement = getByText(/Northspyre Assesment/i);
  expect(assessmentElement).toBeInTheDocument();
});
