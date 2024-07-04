import { useState } from 'react';
import clsx from 'clsx';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AccordionItemType } from '../../types/accordionItem.type';
import styles from './Accordion.module.scss';

type Props = {
  items: AccordionItemType[];
};

const Accordion = ({ items }: Props) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const handleItemSelect = (index: number) => {
    if (selectedItemIndex === index) {
      setSelectedItemIndex(null);
      return;
    }

    setSelectedItemIndex(index);
  };

  return (
    <div className={styles.wrapper}>
      {items?.map((item, i) => (
        <div key={item.key} className={styles.accordion}>
          <button className={styles.button} onClick={() => handleItemSelect(i)}>
            {item.title}
            <span
              className={clsx({
                [styles.arrow]: true,
                [styles.active]: i === selectedItemIndex,
              })}
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </button>
          <div
            className={clsx({
              [styles.content]: true,
              [styles.active]: i === selectedItemIndex,
            })}
          >
            {item.render()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
