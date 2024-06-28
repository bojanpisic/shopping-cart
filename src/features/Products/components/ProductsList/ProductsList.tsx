import useProducts from "../../hooks/useProducts";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductsList.module.scss";

const ProductsList = () => {
  const { products, isFetching, error } = useProducts();

  if (isFetching) {
    return <h1>LOADING...</h1>;
  }

  if (error) {
    return <h1>THERE WAS AN ERROR FETCHING PRODUCTS</h1>;
  }

  if (!products || !products.length) {
    return <h1>No products.</h1>
  }

  return (
    <div className={styles["products-list"]}>
      {products.map((prod) => (
        <ProductItem key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ProductsList;
