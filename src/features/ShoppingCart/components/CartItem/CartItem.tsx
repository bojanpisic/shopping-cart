
import { CartItem as CS } from "../../types/CartItem"
import CartAction from "../CartAction/CartAction"

type Props = {
  item: CS
}

const CartItem = ({ item }: Props) => {

  return (
    <div>
      <p>{item.name}</p>
      <CartAction id={item.id}/>
    </div>
  )
}

export default CartItem