import CartAction from '../../../ShoppingCart/components/CartAction/CartAction';
import { formatCurrency } from '../../../../utils/formatCurrency';
import { ProductType } from '../../../../types/product.type';
import styles from './ProductItem.module.scss';

type Props = {
  product: ProductType;
  onClick: (id: number) => void;
};

const ProductItem = ({ product, onClick }: Props) => {
  const { id, name, description, price } = product;

  const handleOnClick = () => onClick(id);

  return (
    <div className={styles.productItem} onClick={handleOnClick}>
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div></div>
      <div className={styles.price}>
        <span>{formatCurrency(price)}</span>
      </div>
      <div className={styles.actions}>
        <CartAction id={id} />
      </div>
    </div>
  );
};

export default ProductItem;
