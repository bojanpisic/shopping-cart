import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import CartSidePanel from '../../features/ShoppingCart/components/CartSidePanel/CartSidePanel';
import CartIndicator from '../../features/ShoppingCart/components/CartIndicator/CartIndicator';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import SideDrawer from '../SideDrawer/SideDrawer';

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
