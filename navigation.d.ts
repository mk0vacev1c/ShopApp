import { Product } from './types';

export type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: Product };
};
