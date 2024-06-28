import { useContext } from "react";
import { CartContext, CartContextType } from "../context/CartContext";

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);

  if (!context)
    throw new Error("useCartContext must be used within a CartProvider");

  return context;
};
