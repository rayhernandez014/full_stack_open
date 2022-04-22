const Input = ({text, value, handler}) => {
    return (
      <>
        {text} <input value={value} onChange={handler}/>
      </>
    )
  
}

export default Input