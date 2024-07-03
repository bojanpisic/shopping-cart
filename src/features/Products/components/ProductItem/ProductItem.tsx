import clsx from 'clsx';
import { formatCurrency } from '../../../../utils/formatCurrency';
import { ProductType } from '../../types/product.type';
import styles from './ProductItem.module.scss';
import CartAction from '../../../ShoppingCart/components/CartAction/CartAction';

type Props = {
  product: ProductType;
  onSelectProduct: (product: ProductType) => void;
};

const ProductItem = ({ product, onSelectProduct }: Props) => {
  const { name, description, price } = product;

  return (
    <div
      className={clsx(styles['product-item'])}
      onClick={() => onSelectProduct(product)}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div></div>
      <div className={styles.price}>
        <span>{formatCurrency(price)}</span>
      </div>
      <div className={styles.actions}>
        <CartAction product={product} />
      </div>
    </div>
  );
};

export default ProductItem;
