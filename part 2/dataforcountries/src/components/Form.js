import Input from './Input'

const Form = ({onSubmit, handleKey, value}) => {

    return (
      <>
        <form onSubmit={onSubmit}>
          <div>
            <Input value={value} onChange={handleKey}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </>
    )
  
}

export default Form