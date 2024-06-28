import { useState } from "react";
import Button from "../../../../components/Button/Button";
import Card from "../../../../components/Card/Card";
import Modal from "../../../../components/Modal/Modal";
import { formatCurrency } from "../../../../utils/formatCurrency";
import { Product } from "../../types/product";
import CartAction from "../../../ShoppingCart/components/CartAction/CartAction";
import { useCartContext } from "../../../ShoppingCart/hooks/useCartContext";

type Props = {
  product: Product;
};

const ProductItem = ({ product }: Props) => {
  const { addToCart, getItemQuantity } =
    useCartContext();

  const [showDetails, setShowDetails] = useState(false);

  const quantity = getItemQuantity(product.id);

  const addButton = (
    <Button
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        addToCart(product);
        e.stopPropagation();
      }}
    >
      Add to cart
    </Button>
  );

  return (
    <>
      <Card onClick={() => setShowDetails(true)}>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>{formatCurrency(product.price)}</p>
        {quantity === 0 && addButton}
        {quantity > 0 && <p>ADDED</p>}
      </Card>
      <Modal show={showDetails} onClose={() => setShowDetails(false)}>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>{formatCurrency(product.price)}</p>
        {quantity === 0 && addButton}
        {quantity > 0 && <CartAction id={product.id} />}
      </Modal>
    </>
  );
};

export default ProductItem;
