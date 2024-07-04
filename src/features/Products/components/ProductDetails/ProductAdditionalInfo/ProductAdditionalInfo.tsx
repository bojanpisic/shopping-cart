import { ReactNode, useMemo } from 'react';
import Accordion from '../../../../../components/Accordion/Accordion';
import { AccordionItemType } from '../../../../../types/accordionItem.type';

type Props = {
  features: string[];
  specifications: Record<string, string | number | string[]>;
  additionalInformation: Record<string, string | number | string[]>;
};

const renderContent = (data: Record<string, string | number | string[]>): ReactNode => {
  return Object.keys(data).map((key) => {
    const value = data[key];

    if (typeof value === 'string' || typeof value === 'number') {
      return (
        <div key={key}>
          <h4>{key}</h4>
          <p>{value.toString()}</p>
        </div>
      );
    }
    return (
      <div key={key}>
        {Object.keys(data).length > 1 && <h4>{key}</h4>}
        <ul>
          {value.map((item: number | string, index: number) => (
            <li key={index}>{item.toString()}</li>
          ))}
        </ul>
      </div>
    );
  });
};

const ProductAdditionalInfo = ({
  features,
  specifications,
  additionalInformation,
}: Props) => {
  const accordionItems: AccordionItemType[] = useMemo(() => {
    const retVal: AccordionItemType[] = [];

    features?.length &&
      retVal.push({
        title: 'Features',
        key: 'features',
        render: () => renderContent({ features }),
      });

    specifications &&
      retVal.push({
        title: 'Specifications',
        key: 'specifications',
        render: () => renderContent(specifications),
      });
    additionalInformation &&
      retVal.push({
        title: 'Additional information',
        key: 'additionalInformation',
        render: () => renderContent(additionalInformation),
      });

    return retVal;
  }, [features, additionalInformation, specifications]);

  return <Accordion items={accordionItems} />;
};

export default ProductAdditionalInfo;
