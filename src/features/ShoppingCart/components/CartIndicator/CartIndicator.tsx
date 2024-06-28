import Button from "../../../../components/Button/Button";
import { formatCurrency } from "../../../../utils/formatCurrency";
import { useCartContext } from "../../hooks/useCartContext";

const CartIndicator = () => {

  const { 
    cartQuantity,
    totalPrice,
    setShowCartPanel
  } = useCartContext();

  return (
    <Button onClick={() => setShowCartPanel(prev => !prev)}>
      <span>{cartQuantity}</span>
      Show items
      <span>{formatCurrency(totalPrice)}</span>
    </Button>
  )
}

export default CartIndicator