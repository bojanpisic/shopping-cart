import { ReactNode } from 'react';
import CloseButton from '../CloseButton/CloseButton';
import { useScrollLock } from '../../hooks/useScrollLock';
import clsx from 'clsx';
import styles from './SideDrawer.module.scss';
import { useSideDrawerContext } from '../../contexts/SideDrawerContext';

type Props = {
  children: ReactNode;
};

const SideDrawer = ({ children }: Props) => {
  const { isOpen, close } = useSideDrawerContext();
  const { lock, unlock } = useScrollLock();

  if (isOpen) {
    lock();
  } else {
    unlock();
  }

  const classes = {
    [styles.sideDrawer]: true,
    [styles.show]: isOpen,
  };

  return (
    <>
      {isOpen && <div className={styles.backdrop} onClick={close}></div>}
      <div className={clsx(classes)}>
        <div className={styles.header}>
          <CloseButton onClick={close} />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

export default SideDrawer;
