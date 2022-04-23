import Input from './Input'

const Form = ({onSubmit, nameHandler, numberHandler, newName, newNumber}) => {

    return (
      <>
        <form onSubmit={onSubmit}>
          <div>
            <Input text='Name:' value={newName} handler={nameHandler}/>
            <br/>
            <Input text='Number:' value={newNumber} handler={numberHandler}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </>
    )
  
}

export default Form