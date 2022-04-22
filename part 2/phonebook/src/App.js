import { useState } from 'react'
import Input from './components/Input'
import List from './components/List'
import Form from './components/Form'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const tempPerson={
      name: newName,
      phone: newPhone
    }

    const nameList = persons.map( (person) => person.name)

    if (nameList.includes(tempPerson.name)) {
      window.alert(`${tempPerson.name} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat(tempPerson))
      setNewName('')
      setNewPhone('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Input text='Filter shown with:' value={filter} handler={handleFilter}/>
      <h3>Add a new</h3>
      <Form onSubmit={handleSubmit} nameHandler={handleNameChange} phoneHandler={handlePhoneChange} newName={newName} newPhone={newPhone}/>
      <h3>Numbers</h3>
      <List persons={persons} filter={filter} />
    </div>
  )
}

export default App