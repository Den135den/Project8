import React from 'react';
import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import App from '../App';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

test('renders App component', () => {
  // Mock the useSelector hook to return the expected data structure
  useSelector.mockReturnValue({ items: { /* your data */ } });

  // Mock the useDispatch hook
  useDispatch.mockReturnValue(jest.fn());

  // Render the App component
  const { container } = render(<App />);

  // Ensure that the component renders without crashing
  expect(container).toBeTruthy();

  // Add other necessary checks here
});
