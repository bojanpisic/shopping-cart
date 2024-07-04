import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { ProductType } from '../types';

type ProductsContextType = {
  products: ProductType[] | null;
  isLoading: boolean;
  error: Error | null;
};

const ProductsContext = createContext<ProductsContextType>({
  products: null,
  isLoading: false,
  error: null,
});

const useProductsContext = () => {
  const context = useContext(ProductsContext);

  if (!context) throw Error('useProductsContext must be used within a ProductsProvider');

  return context;
};

type ProductsProviderProps = {
  children: ReactNode;
};

const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL);

        if (!response.ok) {
          throw new Error(`Failed to fetch data, status: ${response.status}`);
        }

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

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        error,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, useProductsContext };
