import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useScrollLock } from '../../hooks/useScrollLock';
import CloseButton from '../CloseButton/CloseButton';
import styles from './Modal.module.scss';

type Props = {
  children: ReactNode;
  show: boolean;
  actions?: ReactNode;
  title?: string;
  onClose?: () => void;
};

const Modal = ({ children, title, onClose, actions, show }: Props) => {
  const { lock, unlock } = useScrollLock();

  if (show) {
    lock();
  } else {
    unlock();
    return null;
  }

  return createPortal(
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.wrapper} aria-modal tabIndex={-1} role="dialog">
        <div className={styles.styledModal}>
          <div className={styles.header}>
            {title && <h3>{title}</h3>}
            <CloseButton onClick={onClose} />
          </div>
          <div className={styles.content}>{children}</div>
          <div className={styles.actions}>{actions}</div>
        </div>
      </div>
    </>,
    document.getElementById('modal')!,
  );
};

export default Modal;
