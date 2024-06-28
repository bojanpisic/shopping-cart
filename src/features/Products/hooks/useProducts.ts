import { useEffect, useState } from "react";
import { Product } from "../types/product";

export default function useProducts() {
  
  const [products, setProducts] = useState<Product[] | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(import.meta.env.VITE_API_URL);
      const data = await response.json() as Product[];

      return data;
    };

    setIsFetching(true);

    fetchProducts()
      .then(res => setProducts(res))
      .catch(err => {
        setError(err)
      })
      .finally(() => setIsFetching(false))

    }, []);

  return {
    isFetching,
    products,
    error
  }
}