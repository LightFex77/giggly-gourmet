// eslint-disable-next-line react/prop-types
const Button = ({childreen, onClick}) => {
  return (
    <button className="button" onClick={onClick}>
        {childreen}
    </button>
  )
}

export default Button
