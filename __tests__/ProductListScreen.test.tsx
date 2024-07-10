import React from 'react';
import { render } from '@testing-library/react-native';
import ProductListScreen from '../screens/ProductListScreen';

test('renders product list screen correctly', () => {
  const { getByText } = render(<ProductListScreen />);
  
  expect(getByText('Product List')).toBeTruthy();
});
