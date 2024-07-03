import { ReactNode } from 'react';
import styles from './SideDrawer.module.scss';
import clsx from 'clsx';
import CloseButton from '../CloseButton/CloseButton';
import { useScrollLock } from '../../hooks/useScrollLock';

type Props = {
  children: ReactNode;
  show?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  onClose?: () => void;
};

const SideDrawer = ({ children, show, header, footer, onClose }: Props) => {
  const { lock, unlock } = useScrollLock();

  if (show) {
    lock();
  } else {
    unlock();
  }

  const classes = {
    [styles.sideDrawer]: true,
    [styles.show]: show,
  };

  return (
    <>
      {show && <div className={styles.backdrop} onClick={onClose}></div>}
      <div className={clsx(classes)}>
        <div className={styles.header}>
          {header}
          <CloseButton onClick={onClose} />
        </div>
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>{footer}</div>
      </div>
    </>
  );
};

export default SideDrawer;
