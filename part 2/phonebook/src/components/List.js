import Button from './Button'
const List = ({persons, filter, handleDelete}) => {
    
    const filteredList = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
  
    return (
      <>
        {filteredList.map( (person) => <Info key={person.id} name={person.name} number={person.number} handleDelete={() => handleDelete(person.id)} />)}
      </>
    )
}

const Info = ({name, number, handleDelete}) => {
    return (
      <p>{name} {number} <Button text='delete' type='Button' handler={handleDelete}/></p>
    )
  }

export default List