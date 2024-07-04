import Header from '../Header/Header';
import SideDrawer from '../SideDrawer/SideDrawer';
import CartSidePanel from '../../features/ShoppingCart/components/CartSidePanel/CartSidePanel';
import CartIndicator from '../../features/ShoppingCart/components/CartIndicator/CartIndicator';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Layout = () => {
  return (
    <>
      <Header>
        <CartIndicator />
      </Header>
      <SideDrawer>
        <CartSidePanel />
      </SideDrawer>
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
