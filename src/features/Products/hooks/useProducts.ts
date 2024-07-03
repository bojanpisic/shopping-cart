import { useEffect, useState } from 'react';
import { ProductType } from '../types/product.type';

export const useProducts = () => {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL);
        const data: ProductType[] = await response.json();

        setProducts(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('An unknown error occurred'));
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    products,
    error,
  };
};
