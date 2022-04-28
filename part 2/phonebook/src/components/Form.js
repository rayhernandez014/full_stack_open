import Input from './Input'
import Button from './Button'

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
            <Button text='add' type='submit'/>
          </div>
        </form>
      </>
    )
  
}

export default Form