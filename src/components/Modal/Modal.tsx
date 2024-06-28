import { ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

type ModalProps = {
  children: ReactNode;
  actions?: ReactNode;
  title?: string;
  onClose?: () => void;
  show: boolean
};
const Modal = ({ children, title, onClose, actions, show }: ModalProps) => {
  return show ? createPortal(
    <>
      <div className={styles["backdrop"]} onClick={onClose} />
      <div className={styles["wrapper"]} aria-modal tabIndex={-1} role="dialog">
        <div className={styles["styled-modal"]}>
          <div className={styles["header"]}>
            <div className={styles["header-text"]}>{title}</div>
            <button className={styles["close"]} onClick={onClose}>
              X
            </button>
          </div>
          <div className={styles["content"]}>{children}</div>
          <div className={styles["actions"]}>{actions}</div>
        </div>
      </div>
    </>,
    document.getElementById("modal")!
  ) : null;
};

export default Modal;