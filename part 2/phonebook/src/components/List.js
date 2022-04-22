const List = ({persons, filter}) => {
    
    const filteredList = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
  
    return (
      <>
        {filteredList.map( (person) => <Info key={person.name} name={person.name} phone={person.phone} />)}
      </>
    )
}

const Info = ({name, phone}) => {
    return (
      <p>{name} {phone}</p>
    )
  }

export default List