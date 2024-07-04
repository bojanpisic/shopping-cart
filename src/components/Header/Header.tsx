import { ReactNode } from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { Paths } from '../../routes/path-constants';

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/images/logo.png" alt="logo image" />
      <div className={styles.links}>
        <NavLink to={Paths.Products}>Products</NavLink>
      </div>
      {children}
    </header>
  );
};

export default Header;
