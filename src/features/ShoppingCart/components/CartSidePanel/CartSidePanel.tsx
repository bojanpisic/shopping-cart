import SidePanel from '../../../../components/SidePanel/SidePanel'
import { useCartContext } from '../../hooks/useCartContext'
import CartItem from '../CartItem/CartItem'

type Props = {
  show: boolean
}

const CartSidePanel = ({ show }: Props) => {

  const { 
    cartItems,
    totalPrice
  } = useCartContext();

  const items = cartItems?.map(item => <CartItem item={item} />)

  return (
    <SidePanel isOpened={show}>
      {cartItems?.length && cartItems.map(item => <CartItem item={item} />)}
      { !items?.length && <span>NO items</span>}
      {totalPrice}
    </SidePanel>
  )
}

export default CartSidePanel