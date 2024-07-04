import Button from '../../../../components/Button/Button';
import { useSideDrawerContext } from '../../../../contexts/SideDrawerContext';
import { useCartData } from '../../../../hooks/useCartData';
import { formatCurrency } from '../../../../utils/formatCurrency';
import CartItem from '../CartItem/CartItem';
import styles from './CartSidePanel.module.scss';

const CartSidePanel = () => {
  const { close } = useSideDrawerContext();
  const { cartItems, totalPrice } = useCartData();

  return (
    <>
      {!cartItems?.length && (
        <div className={styles.noItems}>
          <h1>No items</h1>
          <Button variant="secondary" onClick={close}>
            Add items
          </Button>
        </div>
      )}
      {cartItems?.length > 0 &&
        cartItems?.map((item) => <CartItem key={item.id} item={item} />)}
      {cartItems?.length > 0 && (
        <>
          <div className={styles.separator} />
          <p className={styles.totalPrice}>
            Total price <span>{formatCurrency(totalPrice)}</span>
          </p>
        </>
      )}
    </>
  );
};

export default CartSidePanel;
