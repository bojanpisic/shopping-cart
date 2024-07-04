import { ProductType } from './product.type';

export type CartItemType = Pick<ProductType, 'id' | 'name' | 'price'> & {
  quantity: number;
};
