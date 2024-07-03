import { ReactNode } from 'react';
import { Logo } from '../../Icons';
import styles from './Header.module.scss';

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/images/logo.png" alt="logo image" />
      {children}
    </header>
  );
};

export default Header;
