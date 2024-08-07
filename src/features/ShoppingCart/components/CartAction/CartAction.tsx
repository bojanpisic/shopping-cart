import { useCartContext } from '../../../../contexts/CartContext';
import Button from '../../../../components/Button/Button';

type Props = {
  id: number;
};

const CartAction = ({ id }: Props) => {
  const { addToCart } = useCartContext();

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    addToCart(id);
  };

  return <Button onClick={handleOnClick}>Add to cart</Button>;
};

export default CartAction;
