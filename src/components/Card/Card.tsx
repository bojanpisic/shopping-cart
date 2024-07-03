import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  footer?: ReactNode;
  onClick?: () => void;
};

const Card = ({ children, onClick, footer }: Props) => {
  return (
    <div onClick={onClick}>
      <div>{children}</div>
      <div>{footer}</div>
    </div>
  );
};

export default Card;
