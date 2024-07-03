import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import CloseButton from '../CloseButton/CloseButton';
import styles from './Modal.module.scss';
import { useScrollLock } from '../../hooks/useScrollLock';

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
  }

  return show
    ? createPortal(
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
      )
    : null;
};

export default Modal;
