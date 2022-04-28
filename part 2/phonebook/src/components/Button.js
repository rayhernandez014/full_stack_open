const Button = ({text, handler, type}) => {
    return (
        <button type={type} onClick={handler}>{text}</button>
    )
}

export default Button