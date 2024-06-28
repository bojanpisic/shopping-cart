import Button from "../../../../components/Button/Button"
import { useCartContext } from "../../hooks/useCartContext";

type Props = {
  id: number
}

const CartAction = ({ id }: Props) => {

  const { 
    getItemQuantity,
    decrementCartItem,
    incrementCartItem
  } = useCartContext();

  const quantity = getItemQuantity(id);

  return (
    <div>
      <Button onClick={() => decrementCartItem(id)}>-</Button>
      <span>{quantity}</span>
      <Button onClick={() => incrementCartItem(id)}>+</Button>
    </div>
  )
}

export default CartAction