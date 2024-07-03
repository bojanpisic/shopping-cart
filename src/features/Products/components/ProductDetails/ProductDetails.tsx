import Accordion from '../../../../components/Accordion/Accordion';
import { formatCurrency } from '../../../../utils/formatCurrency';
import { ProductType } from '../../types/product.type';
import styles from './ProductDetails.module.scss';

type Props = {
  product: ProductType;
};

const renderContent = (data: any): JSX.Element[] => {
  return Object.keys(data).map((key) => {
    const value = data[key];

    if (Array.isArray(value)) {
      return (
        <div key={key}>
          <ul>
            {value.map((item: object | string, index: number) => (
              <li key={index}>{typeof item === 'object' ? renderContent(item) : item}</li>
            ))}
          </ul>
        </div>
      );
    }

    if (typeof value === 'object' && value !== null) {
      return (
        <div key={key}>
          <h4>{key}</h4>
          {renderContent(value)}
        </div>
      );
    }

    return (
      <div key={key}>
        <h4>{key}</h4>
        <p>{value.toString()}</p>
      </div>
    );
  });
};

const ProductDetails = ({ product }: Props) => {
  const { name, description, price, features, specifications } = product;

  const accordionItems = [
    {
      title: 'Features',
      key: 'features',
      render: () => renderContent(features),
    },
    {
      title: 'Specifications',
      key: 'specifications',
      render: () => renderContent(specifications),
    },
  ];

  return (
    <div className={styles.productDetails}>
      <h2>{name}</h2>
      <span className={styles.price}> {formatCurrency(price)}</span>
      <p className={styles.description}>{description}</p>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default ProductDetails;
