import { ReactNode } from "react";
import Header from "../components/Header/Header";
import CartSidePanel from "../features/ShoppingCart/components/CartSidePanel/CartSidePanel";
import { useCartContext } from "../features/ShoppingCart/hooks/useCartContext";

type Props = {
  children: ReactNode,
  headerContent?: ReactNode,
};

const BasicLayout = ({ children, headerContent }: Props) => {
  const { showCartPanel } = useCartContext()
  return (
    <div>
      <Header>
        {headerContent}
      </Header>
      <main>
        {children}
      </main>
      <CartSidePanel show={showCartPanel} />
    </div>
  )
}

export default BasicLayout;