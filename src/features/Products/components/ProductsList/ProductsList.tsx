import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';
import { useProductsContext } from '../../../../contexts/ProductsContext';
import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductsList.module.scss';
import { Paths } from '../../../../routes/path-constants';

const ProductsList = () => {
  const { products, isLoading, error } = useProductsContext();

  const navigate = useNavigate();
  const handleOnProductClick = (id: number) =>
    navigate(`${Paths.ProductDetails}`.replace(':productId', id.toString()));

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <h1>Oops...something went wrong</h1>;
  }

  if (!products || !products.length) {
    return <h1>No products.</h1>;
  }

  return (
    <div className={styles.productsList}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onClick={handleOnProductClick} />
      ))}
    </div>
  );
};

export default ProductsList;
