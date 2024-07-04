import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { CartDataType } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

export type CartContextType = {
  cartData: CartDataType;
  cartQuantity: number;
  isCartPanelOpened: boolean;
  showCartPanel: () => void;
  hideCartPanel: () => void;
  addToCart: (id: number) => void;
  decrementCartItem: (id: number) => void;
  removeCartItem: (id: number) => void;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext<CartContextType>({
  cartData: {},
  cartQuantity: 0,
  isCartPanelOpened: false,
  showCartPanel: () => {},
  hideCartPanel: () => {},
  addToCart: () => {},
  decrementCartItem: () => {},
  removeCartItem: () => {},
});

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);

  if (!context) throw new Error('useCartContext must be used within a CartProvider');

  return context;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartData, setCartData] = useLocalStorage<CartDataType>(
    'cart',
    {} as CartDataType,
  );

  const [isCartPanelOpened, setIsCartPanelOpened] = useState(false);

  const addToCart = useCallback(
    (id: keyof CartDataType) => {
      setCartData((prevValue) => {
        const cartItem = prevValue[id];

        if (!cartItem)
          return {
            ...prevValue,
            [id]: { quantity: 1 },
          };

        return {
          ...prevValue,
          [id]: { quantity: cartItem.quantity + 1 },
        };
      });
    },
    [setCartData],
  );

  const decrementCartItem = useCallback(
    (id: keyof CartDataType) => {
      setCartData((prevValue) => {
        const cartItem = prevValue[id];

        if (!cartItem || cartItem.quantity === 1) return { ...prevValue };

        return {
          ...prevValue,
          [id]: { quantity: cartItem.quantity - 1 },
        };
      });
    },
    [setCartData],
  );

  const removeCartItem = useCallback(
    (id: keyof CartDataType) => {
      setCartData((prevValue) => {
        const copy = { ...prevValue };
        delete copy[id];
        return copy;
      });
    },
    [setCartData],
  );

  const cartQuantity = useMemo(
    () => Object.values(cartData).reduce((quantity, item) => item.quantity + quantity, 0),
    [cartData],
  );

  const showCartPanel = useCallback(
    () => setIsCartPanelOpened(true),
    [setIsCartPanelOpened],
  );
  const hideCartPanel = useCallback(
    () => setIsCartPanelOpened(false),
    [setIsCartPanelOpened],
  );

  return (
    <CartContext.Provider
      value={{
        cartData,
        cartQuantity,
        addToCart,
        decrementCartItem,
        removeCartItem,
        showCartPanel,
        hideCartPanel,
        isCartPanelOpened,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
