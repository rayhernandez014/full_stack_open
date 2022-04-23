const List = ({persons, filter}) => {
    
    const filteredList = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
  
    return (
      <>
        {filteredList.map( (person) => <Info key={person.name} name={person.name} number={person.number} />)}
      </>
    )
}

const Info = ({name, number}) => {
    return (
      <p>{name} {number}</p>
    )
  }

export default List