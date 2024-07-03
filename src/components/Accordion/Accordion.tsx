import { ReactNode, useState } from 'react';
import styles from './Accordion.module.scss';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

export type ItemType = {
  key: string;
  title: string;
  render: () => ReactNode;
};

type Props = {
  items: ItemType[];
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
            <FontAwesomeIcon icon={faArrowDown} />
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
