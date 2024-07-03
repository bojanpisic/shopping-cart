import clsx from 'clsx';
import styles from './Button.module.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

const Button = ({ variant = 'primary', ...rest }: Props) => {
  return (
    <button className={clsx(styles.button, styles[variant])} {...rest}>
      {rest.children}
    </button>
  );
};

export default Button;
