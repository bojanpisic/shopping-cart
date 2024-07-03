import { faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../hooks/useCartContext';
import styles from './CartQuantityActions.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  id: number;
};

const CartQuantityActions = ({ id }: Props) => {
  const { getItemQuantity, decrementCartItem, incrementCartItem, removeCartItem } =
    useCartContext();

  const quantity = getItemQuantity(id);

  return (
    <div className={styles.wrapper}>
      <button className={styles.quantityStepper} onClick={() => decrementCartItem(id)}>
        <FontAwesomeIcon icon={faMinus} color="#009de0" />
      </button>
      <span>{quantity}</span>
      <button className={styles.quantityStepper} onClick={() => incrementCartItem(id)}>
        <FontAwesomeIcon icon={faPlus} color="#009de0" />
      </button>
      <button onClick={() => removeCartItem(id)}>
        <FontAwesomeIcon icon={faTrashCan} color="#009de0" />
      </button>
    </div>
  );
};

export default CartQuantityActions;
