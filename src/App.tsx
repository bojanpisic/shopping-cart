import { ProductsProvider } from './contexts/ProductsContext.tsx';
import { CartProvider } from './contexts/CartContext.tsx';
import { SideDrawerProvider } from './contexts/SideDrawerContext.tsx';
import AppRouterProvider from './routes/AppRouterProvider.tsx';
import './styles/_variables.scss';

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <SideDrawerProvider>
          <AppRouterProvider />
        </SideDrawerProvider>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
