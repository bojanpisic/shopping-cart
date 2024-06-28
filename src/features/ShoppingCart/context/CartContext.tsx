import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Product } from "../../Products/types/product";
import { CartItem } from "../types/CartItem";
import { localData } from "../../../utils/localData";

export type CartContextType = {
  cartItems: CartItem[];
  cartQuantity: number;
  totalPrice: number;
  setShowCartPanel: React.Dispatch<React.SetStateAction<boolean>>;
  getItemQuantity: (id: number) => number;
  addToCart: (product: Product) => void;
  incrementCartItem: (id: number) => void;
  decrementCartItem: (id: number) => void;
  removeCartItem: (id: number) => void;
  showCartPanel: boolean;
};

type CartProviderProps = {
  children: ReactNode;
};

type CartState = {
  [key: number]: CartItem;
};

enum ReducerActionType {
  Increment = "INCREMENT",
  Decrement = "DECREMENT",
  Add = "ADD",
  Remove = "REMOVE",
}

type ActionType<T, K> = {
  type: T;
  payload: K;
};

type IncrementActionType = ActionType<ReducerActionType.Increment, number>;
type DecrementActionType = ActionType<ReducerActionType.Decrement, number>;
type AddActionType = ActionType<ReducerActionType.Add, Product>;
type RemoveActionType = ActionType<ReducerActionType.Remove, number>;

type ReducerAction =
  | IncrementActionType
  | DecrementActionType
  | AddActionType
  | RemoveActionType;

const CartContext = createContext<CartContextType>({
  cartItems: [],
  cartQuantity: 0,
  totalPrice: 0,
  setShowCartPanel: () => false,
  getItemQuantity: () => 0,
  addToCart: () => undefined,
  incrementCartItem: () => undefined,
  decrementCartItem: () => undefined,
  removeCartItem: () => undefined,
  showCartPanel: false,
});

const cartReducer = (state: CartState, action: ReducerAction): CartState => {
  switch (action.type) {
    case ReducerActionType.Increment: {
      const cartItem = state[action.payload];

      if (cartItem)
        return {
          ...state,
          [action.payload]: {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          },
        };

      return state;
    }

    case ReducerActionType.Decrement: {
      const cartItem = state[action.payload];

      if (cartItem?.quantity === 1) {
        delete state[action.payload];
        return { ...state };
      }

      if (cartItem?.quantity > 1) {
        return {
          ...state,
          [action.payload]: {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          },
        };
      }

      return state;
    }

    case ReducerActionType.Add: {
      const cartItem = state[action.payload.id];

      if (!cartItem)
        return {
          ...state,
          [action.payload.id]: { ...action.payload, quantity: 1 },
        };

      return { ...state };
    }

    case ReducerActionType.Remove: {
      delete state[action.payload];

      return { ...state };
    }

    default:
      console.error("Action not available");
      return state;
  }
};

const initialReducerValue =
  localData.get<CartState>("cart") ?? ({} as CartState);

const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialReducerValue);

  const [showCartPanel, setShowCartPanel] = useState(false);

  const addToCart = (product: Product) =>
    dispatch({ type: ReducerActionType.Add, payload: product });
  const incrementCartItem = (id: number) =>
    dispatch({ type: ReducerActionType.Increment, payload: id });
  const decrementCartItem = (id: number) =>
    dispatch({ type: ReducerActionType.Decrement, payload: id });
  const removeCartItem = (id: number) =>
    dispatch({ type: ReducerActionType.Remove, payload: id });
  const getItemQuantity = (id: number) => state[id]?.quantity || 0;

  const cartQuantity = Object.values(state).reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const totalPrice =
    Object.values(state).reduce(
      (total, item) => item.quantity * item.price + total,
      0
    ) || 0;

  useEffect(() => {
    localData.add("cart", state);
  }, [state]);

  return (
    <CartContext.Provider
      value={{
        cartItems: Object.values(state),
        cartQuantity,
        totalPrice,
        getItemQuantity,
        addToCart,
        incrementCartItem,
        decrementCartItem,
        removeCartItem,
        setShowCartPanel,
        showCartPanel,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
