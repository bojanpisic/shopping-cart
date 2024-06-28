import { CSSProperties, ReactNode } from "react"

type Props = {
  children: ReactNode,
  onClick?: () => void,
  style?: CSSProperties
}

const Card = ({
  children,
  onClick,
  style,
  ...props
}: Props) => {
  return (
    <div
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card