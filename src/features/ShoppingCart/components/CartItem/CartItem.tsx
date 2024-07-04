import { useCartContext } from '../../../../contexts/CartContext';
import { CartItemType } from '../../../../types';
import { formatCurrency } from '../../../../utils/formatCurrency';
import CartQuantityActions from '../CartQuantityActions/CartQuantityActions';
import styles from './CartItem.module.scss';

type Props = {
  item: CartItemType;
};

const CartItem = ({ item }: Props) => {
  const { decrementCartItem, addToCart, removeCartItem } = useCartContext();

  return (
    <div className={styles.cartItem}>
      <div className={styles.details}>
        <h3 className={styles.name}>{item.name}</h3>
        <p>
          {item.quantity} x {formatCurrency(item.price)}
        </p>
      </div>
      <CartQuantityActions
        min={1}
        id={item.id}
        quantity={item.quantity}
        increment={addToCart}
        decrement={decrementCartItem}
        remove={removeCartItem}
      />
    </div>
  );
};

export default CartItem;
