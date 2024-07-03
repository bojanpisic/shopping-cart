import Button from '../../../../components/Button/Button';
import SideDrawer from '../../../../components/SideDrawer/SideDrawer';
import { formatCurrency } from '../../../../utils/formatCurrency';
import { useCartContext } from '../../hooks/useCartContext';
import CartItem from '../CartItem/CartItem';
import styles from './CartSidePanel.module.scss';

const CartSidePanel = () => {
  const { cartItems, totalPrice, showCartPanel, setShowCartPanel } = useCartContext();

  const handleClosePanel = () => setShowCartPanel(false);

  return (
    <SideDrawer show={showCartPanel} onClose={handleClosePanel}>
      {cartItems?.length > 0 &&
        cartItems?.map((item) => <CartItem key={item.id} item={item} />)}

      {!cartItems?.length && (
        <div className={styles.noItems}>
          <h1>No items</h1>
          <Button variant="secondary" onClick={handleClosePanel}>
            Add items
          </Button>
        </div>
      )}
      {cartItems?.length > 0 && (
        <>
          <div className={styles.separator} />
          <p className={styles.totalPrice}>
            Total price <span>{formatCurrency(totalPrice)}</span>
          </p>
        </>
      )}
    </SideDrawer>
  );
};

export default CartSidePanel;
