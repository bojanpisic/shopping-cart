import { ReactNode } from "react";
import { Logo } from "../../Icons";

type Props = {
  children: ReactNode,
};

const Header = ({ children }: Props) => {
  return (
    <header>
      <Logo />
      {children}
    </header>
  )
}

export default Header;