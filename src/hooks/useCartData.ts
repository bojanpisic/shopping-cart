import { useCartContext } from '../contexts/CartContext';
import { useProductsContext } from '../contexts/ProductsContext';
import { CartItemType } from '../types/cartItem.type';

export const useCartData = () => {
  const { products } = useProductsContext();
  const { cartData } = useCartContext();

  const cartItems: CartItemType[] = Object.keys(cartData)
    .map((key) => {
      const product = products?.find((product) => product.id === +key);

      return product
        ? {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: cartData[+key].quantity,
          }
        : null;
    })
    .filter((item): item is CartItemType => item !== null);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return {
    cartItems,
    totalPrice,
  };
};
