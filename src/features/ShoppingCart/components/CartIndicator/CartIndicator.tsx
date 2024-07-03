import Button from '../../../../components/Button/Button';
import { formatCurrency } from '../../../../utils/formatCurrency';
import { useCartContext } from '../../hooks/useCartContext';
import styles from './CartIndicator.module.scss';

const CartIndicator = () => {
  const { cartQuantity, totalPrice, setShowCartPanel } = useCartContext();

  return (
    <Button onClick={() => setShowCartPanel((prev) => !prev)} style={{ flex: 'unset' }}>
      <span className={styles.itemsQuantity}>{cartQuantity}</span>
      Show items
      <span>{formatCurrency(totalPrice)}</span>
    </Button>
  );
};

export default CartIndicator;
