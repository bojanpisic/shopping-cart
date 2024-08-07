import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import styles from './CloseButton.module.scss';

type Props = {
  position?: 'left' | 'right';
  onClick?: () => void;
};

const CloseButton = ({ position = 'right', onClick }: Props) => {
  return (
    <button className={clsx(styles.closeButton, styles[position])} onClick={onClick}>
      <FontAwesomeIcon icon={faXmark} />
    </button>
  );
};

export default CloseButton;
