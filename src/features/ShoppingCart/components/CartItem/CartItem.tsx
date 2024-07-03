import { formatCurrency } from '../../../../utils/formatCurrency';
import { CartItemType } from '../../types/CartItemType';
import CartQuantityActions from '../CartQuantityActions/CartQuantityActions';
import styles from './CartItem.module.scss';

type Props = {
  item: CartItemType;
};

const CartItem = ({ item }: Props) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.details}>
        <h3 className={styles.name}>{item.name}</h3>
        <p>
          {item.quantity} x {formatCurrency(item.price)}
        </p>
      </div>
      <CartQuantityActions id={item.id} />
    </div>
  );
};

export default CartItem;
