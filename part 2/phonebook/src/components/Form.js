import Input from './Input'

const Form = ({onSubmit, nameHandler, phoneHandler, newName, newPhone}) => {

    return (
      <>
        <form onSubmit={onSubmit}>
          <div>
            <Input text='Name:' value={newName} handler={nameHandler}/>
            <br/>
            <Input text='Number:' value={newPhone} handler={phoneHandler}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </>
    )
  
}

export default Form