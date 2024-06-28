type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = (props: Props) => {

  return (
    <button
      {...props}
    >
      {props?.children}
    </button>
  )
}

export default Button