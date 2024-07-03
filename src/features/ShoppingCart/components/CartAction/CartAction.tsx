import Button from '../../../../components/Button/Button';
import { ProductType } from '../../../Products/types/product.type';
import { useCartContext } from '../../hooks/useCartContext';

type Props = {
  product: ProductType;
};

const CartAction = ({ product }: Props) => {
  const { addToCart } = useCartContext();

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    addToCart(product);
  };

  return <Button onClick={handleOnClick}>Add to cart</Button>;
};

export default CartAction;
