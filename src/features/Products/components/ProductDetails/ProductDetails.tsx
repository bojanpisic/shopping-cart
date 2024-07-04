import { useParams } from 'react-router-dom';
import ProductAdditionalInfo from './ProductAdditionalInfo/ProductAdditionalInfo';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';
import { useProductsContext } from '../../../../contexts/ProductsContext';
import { formatCurrency } from '../../../../utils/formatCurrency';
import styles from './ProductDetails.module.scss';
import CartAction from '../../../ShoppingCart/components/CartAction/CartAction';

const ProductDetails = () => {
  const { products, isLoading } = useProductsContext();

  const { productId } = useParams();

  if (isLoading) return <LoadingSpinner />;

  const product = products?.find((product) => product.id.toString() === productId);
  if (!product) return null;

  return (
    <div className={styles.productDetails}>
      <h2>{product.name}</h2>
      <span className={styles.price}> {formatCurrency(product.price)}</span>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.actions}>
        <CartAction id={product.id} />
      </div>
      <ProductAdditionalInfo
        features={product.features}
        specifications={product.specifications}
        additionalInformation={product.additionalInformation}
      />
    </div>
  );
};

export default ProductDetails;
