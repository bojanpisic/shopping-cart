import Button from '../../../../components/Button/Button';
import { useSideDrawerContext } from '../../../../contexts/SideDrawerContext';
import { useProductsContext } from '../../../../contexts/ProductsContext';
import { useCartContext } from '../../../../contexts/CartContext';
import { formatCurrency } from '../../../../utils/formatCurrency';
import { useCartData } from '../../../../hooks/useCartData';
import styles from './CartIndicator.module.scss';

const CartIndicator = () => {
  const { isLoading, error } = useProductsContext();
  const { cartQuantity } = useCartContext();
  const { open } = useSideDrawerContext();
  const { totalPrice } = useCartData();

  if (isLoading || error) return null;

  return (
    <div>
      <Button onClick={open}>
        <span className={styles.itemsQuantity}>{cartQuantity}</span>
        Show items
        <span>{formatCurrency(totalPrice)}</span>
      </Button>
    </div>
  );
};

export default CartIndicator;
