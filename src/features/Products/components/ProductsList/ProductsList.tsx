import { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import ProductItem from '../ProductItem/ProductItem';
import { ProductType } from '../../types/product.type';
import Modal from '../../../../components/Modal/Modal';
import ProductDetails from '../ProductDetails/ProductDetails';
import clsx from 'clsx';
import styles from './ProductsList.module.scss';
import CartAction from '../../../ShoppingCart/components/CartAction/CartAction';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';

const ProductsList = () => {
  const { products, isLoading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<ProductType>();
  const [showModal, setShowModal] = useState<boolean>(false);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <h1>Oops...something went wrong</h1>;
  }

  if (!products || !products.length) {
    //lodash isEmpty
    return <h1>No products.</h1>;
  }

  const handleSelectProduct = (product: ProductType) => {
    setShowModal(true);
    setSelectedProduct(product);
  };

  return (
    <div className={clsx(styles['products-list'])}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onSelectProduct={handleSelectProduct}
        />
      ))}
      <Modal
        show={showModal}
        actions={<CartAction product={selectedProduct!} />}
        onClose={() => setShowModal(false)}
      >
        {selectedProduct && <ProductDetails product={selectedProduct} />}
      </Modal>
    </div>
  );
};

export default ProductsList;
