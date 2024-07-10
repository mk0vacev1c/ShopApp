import React from 'react';
import { render } from '@testing-library/react-native';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import { Product } from '../types';

test('renders product detail screen correctly', () => {
  const product: Product = {
    id: 1,
    brand: 'Maybelline',
    name: 'Product Name',
    price: '10.99',
    image_link: 'http://image.url',
  };

  const route = { params: { product } };

  const { getByText } = render(<ProductDetailScreen route={route} />);
  
  expect(getByText(product.brand)).toBeTruthy();
  expect(getByText(product.name)).toBeTruthy();
  expect(getByText(`$${product.price}`)).toBeTruthy();
});
