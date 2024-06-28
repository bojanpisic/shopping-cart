import CartIndicator from './features/ShoppingCart/components/CartIndicator/CartIndicator.tsx';
import ProductsList from './features/Products/components/ProductsList/ProductsList.tsx';
import { CartProvider } from './features/ShoppingCart/context/CartContext.tsx';
import BasicLayout from './layouts/BasicLayout.tsx';

function App() {

  return (
    <CartProvider>
      <BasicLayout headerContent={<CartIndicator />}>
        <ProductsList />
      </BasicLayout>
    </CartProvider>
  )
}

export default App;
