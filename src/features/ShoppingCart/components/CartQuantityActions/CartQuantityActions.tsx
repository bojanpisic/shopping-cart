import { faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import styles from './CartQuantityActions.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  id: number;
  quantity: number;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  remove: (id: number) => void;
  min?: number;
  max?: number;
};

const CartQuantityActions = ({
  id,
  quantity,
  increment,
  decrement,
  remove,
  min = 1,
  max = 10,
}: Props) => {
  const isDecrementDisabled = quantity === min;
  const isIncrementDisabled = quantity === max;

  return (
    <div className={styles.wrapper}>
      <button
        disabled={isDecrementDisabled}
        className={styles.quantityStepper}
        onClick={() => decrement(id)}
      >
        <FontAwesomeIcon
          icon={faMinus}
          color={
            !isDecrementDisabled ? 'var(--primary-color)' : 'var(--disabled-button-color)'
          }
        />
      </button>
      <span>{quantity}</span>
      <button
        disabled={isIncrementDisabled}
        className={styles.quantityStepper}
        onClick={() => increment(id)}
      >
        <FontAwesomeIcon
          icon={faPlus}
          color={
            !isIncrementDisabled ? 'var(--primary-color)' : 'var(--disabled-button-color)'
          }
        />
      </button>
      <button onClick={() => remove(id)}>
        <FontAwesomeIcon icon={faTrashCan} color="var(--primary-color)" />
      </button>
    </div>
  );
};

export default CartQuantityActions;
