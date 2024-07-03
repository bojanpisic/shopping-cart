import { ReactNode } from 'react';
import Header from '../Header/Header';
import CartSidePanel from '../../features/ShoppingCart/components/CartSidePanel/CartSidePanel';

type Props = {
  children: ReactNode;
  headerContent?: ReactNode;
};

const BasicLayout = ({ children, headerContent }: Props) => {
  return (
    <>
      <Header>{headerContent}</Header>
      <main>{children}</main>
      <CartSidePanel />
    </>
  );
};

export default BasicLayout;
